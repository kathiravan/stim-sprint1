import { Component, OnInit, Directive, ElementRef, HostBinding, Renderer, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';


import { Country, State } from './country';
import { Address } from './address';
import {AccountAddressService} from './account-address/account-address.service';
import {accountaddress} from './account-address/account-address';
import {AccountBillAddressService } from './account-bill-address/account-bill-address.service';
import {accountbilladdress} from './account-bill-address/account-bill-address';
import {AccountBookerAddressService } from './booker-agent-address/booker-agent-address.service';
import {accountbookeraddress } from './booker-agent-address/booker-agent-address';
import {contracttemplateinfo } from './contract-template-info/contract-template-info';
import {accountpartnersummary } from './account-partner-summary/account-partner-summary';
import {accountreference } from './account-reference/account-reference';

import {accountoriginaddress } from './account-origin-detail/account-origin-detail';
import {accountdestinationaddress } from './account-destination-detail/account-destination-detail';
import {accountpartnerinfo } from './account-add-partner-info/account-add-partner-info';
import { Consignment } from './consignment'

import {OrderInfo, OrderShippingInfo} from './order';
import {OrderInfoService} from './order.service';
import { HttpHeaders } from '@angular/common/http';

//import * as jQuery from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, AfterViewChecked, AfterViewInit {

  countries = [new Country(1, 'USA'), new Country(2, 'India'), new Country(3, 'Australia'),
  new Country(4, 'Brazil'), new Country(5, 'Russia')];

  states = [new State(1, 'Indiana'), new State(2, 'New Jersey'), new State(3, 'North Carolina')];


  p2pstate = '';
  p2pcountry = '';

  localaddress: Address;
  localaddress2: Address;
  localaddress3: Address;
  localaddress4: Address;
  prop: string;   
  over: string = '';
  countP: string = "";
  orderIdP: string = "";
  accountIdP: string = "";
  tnsaddressP: accountaddress;
  tnsaccountbilladdressP: accountbilladdress;
  tnsaccountbookeraddressP: accountbookeraddress;
  tnscontracttemplateinfoP: contracttemplateinfo;
  accountpartnersummaryP: accountpartnersummary;
  accountreferenceP: accountreference;
  tnsaccountoriginaddressP: accountoriginaddress;
  tnsaccountdestinationaddressP: accountdestinationaddress;
  tnsaccountpartnerinfoP: accountpartnerinfo;
  OrderInfoP: OrderInfo;
  OrderShippingInfoP: OrderShippingInfo;
  consignmentInfo : any;
  consignment : Consignment;
  products : any;

  changeClass($event) {
      this.over = $event.type == 'mouseenter' ? 'over' : '';
      $event.stopPropagation();
  }

  refreshSelect() {
      jQuery('.selectpicker').selectpicker('refresh');
  }

  constructor(private _AccountAddressService: AccountAddressService,
    private _OrderInfoService: OrderInfoService) { 
      
    this.tnsaddressP = new accountaddress();
    this.tnsaccountbilladdressP = new accountbilladdress();
    this.tnsaccountbookeraddressP = new accountbookeraddress();
    this.tnscontracttemplateinfoP = new contracttemplateinfo();
    this.accountpartnersummaryP = new accountpartnersummary();
    this.accountreferenceP = new accountreference();
    this.tnsaccountoriginaddressP = new accountoriginaddress();
    this.OrderInfoP = new OrderInfo();
    this.OrderShippingInfoP = new OrderShippingInfo();
    this.tnsaccountdestinationaddressP = new accountdestinationaddress();
    this.tnsaccountpartnerinfoP = new accountpartnerinfo();
    this.consignment = new Consignment();
  }

  clicked(){
    console.log("1-" + this.countP);
    this._AccountAddressService.getAccountAddress(Number(this.countP))
    .subscribe(accaddress => 
      {
        for (let entry of accaddress) {
          this.tnsaddressP.customerName = entry.customerName;
          this.tnsaddressP.customerMainPhone = entry.cbmainPhone;
      }
        console.log(this.tnsaddressP);
      }
    );
    console.log("10");
  }

  onOrderIdclicked(){
    this._OrderInfoService.getorderInfo(Number(this.orderIdP))
    .subscribe((info)=>{
        this.OrderInfoP = info;
        
        this.tnsaddressP.customerId = Number(this.OrderInfoP[0].customerid);
        this.tnsaddressP.customerName = this.OrderInfoP[0].customerName;
        this.tnsaddressP.customerContactName = this.OrderInfoP[0].contactName;
        this.tnsaddressP.customerMainPhone = this.OrderInfoP[0].cbmainPhone;
        this.tnsaddressP.customerSCACId = this.OrderInfoP[0].scacid;
        this.tnsaddressP.customerExtn = "001";

        this.tnsaccountbookeraddressP.customerBookerId = 1;
        this.tnsaccountbookeraddressP.customerBookerName = this.OrderInfoP[0].bookerName;
        this.tnsaccountbookeraddressP.customerBookerContactName1 = this.OrderInfoP[0].contactName;
        this.tnsaccountbookeraddressP.customerBookerPhone = this.OrderInfoP[0].contactPhone;
        this.tnsaccountbookeraddressP.customerBookerExtn = "001";
        this.tnsaccountbookeraddressP.customerBookersalesrep = this.OrderInfoP[0].salesPersonName;
        this.tnsaccountbookeraddressP.customerBookerAccountRef = this.OrderInfoP[0].custRefNumber;

        this.tnsaccountbilladdressP.customerBillId = 1;
        this.tnsaccountbilladdressP.customerBillAddress1 = this.OrderInfoP[0].cbaddress1;
        this.tnsaccountbilladdressP.customerBillAddress2 = this.OrderInfoP[0].cbaddress2;
        this.tnsaccountbilladdressP.customerBillCity = this.OrderInfoP[0].cbcity;
        this.tnsaccountbilladdressP.customerBillZip = this.OrderInfoP[0].cbzip;
        this.tnsaccountbilladdressP.customerBillState = this.OrderInfoP[0].cbStateName;
        this.tnsaccountbilladdressP.customerBillCountry = this.OrderInfoP[0].cbCountryName;

        this.tnscontracttemplateinfoP.accounttemplateId = 1;
        this.tnscontracttemplateinfoP.accountServiceLevel = this.OrderInfoP[0].serviceLevelID;
        this.tnscontracttemplateinfoP.orderTemplate = this.OrderInfoP[0].orderTemplate;
        this.tnscontracttemplateinfoP.serviceLevelDesc = this.OrderInfoP[0].serviceLevelDesc;
        
        
        this.tnscontracttemplateinfoP.accountFreightdate = this.OrderInfoP[0].freightAvailable;
        this.tnscontracttemplateinfoP.accountdeliverydate = this.OrderInfoP[0].deliveryDate;
        this.tnscontracttemplateinfoP.accountcarrierPRONumber = this.OrderInfoP[0].carrierProNbr;
        this.tnscontracttemplateinfoP.accountcarrierPONumber = this.OrderInfoP[0].pONumber;

        this.accountpartnersummaryP.partnerId=this.OrderInfoP[0].partnerId;
        this.accountpartnersummaryP.performingPartner=this.OrderInfoP[0].performingPartner;
        this.accountpartnersummaryP.partnerAddress1=this.OrderInfoP[0].partnerAddress1;
        this.accountpartnersummaryP.partnerAddress2=this.OrderInfoP[0].partnerAddress2;
        this.accountpartnersummaryP.partnerCity=this.OrderInfoP[0].partnerCity;
        this.accountpartnersummaryP.partnerStateId=this.OrderInfoP[0].partnerStateId;
        this.accountpartnersummaryP.partnerStateName=this.OrderInfoP[0].partnerStateName;
        this.accountpartnersummaryP.partnerZip=this.OrderInfoP[0].partnerZip;
        this.accountpartnersummaryP.partnerMainPhone=this.OrderInfoP[0].partnerMainPhone;
        this.accountpartnersummaryP.partnerMainFax=this.OrderInfoP[0].partnerMainFax;
        this.accountpartnersummaryP.partnerContact=this.OrderInfoP[0].partnerContact;
        this.accountpartnersummaryP.partnerEmail=this.OrderInfoP[0].partnerEmail;
        this.accountpartnersummaryP.partnerCountryId=this.OrderInfoP[0].partnerCountryId;
        this.accountpartnersummaryP.partnerCountryName=this.OrderInfoP[0].partnerCountryName;

        this.tnsaccountpartnerinfoP.partnerId=this.OrderInfoP[0].partnerId;
        this.tnsaccountpartnerinfoP.performingPartner=this.OrderInfoP[0].performingPartner;
        this.tnsaccountpartnerinfoP.partnerAddress1=this.OrderInfoP[0].partnerAddress1;
        this.tnsaccountpartnerinfoP.partnerAddress2=this.OrderInfoP[0].partnerAddress2;
        this.tnsaccountpartnerinfoP.partnerCity=this.OrderInfoP[0].partnerCity;
        this.tnsaccountpartnerinfoP.partnerStateId=this.OrderInfoP[0].partnerStateId;
        this.tnsaccountpartnerinfoP.partnerStateName=this.OrderInfoP[0].partnerStateName;
        this.tnsaccountpartnerinfoP.partnerZip=this.OrderInfoP[0].partnerZip;
        this.tnsaccountpartnerinfoP.partnerMainPhone=this.OrderInfoP[0].partnerMainPhone;
        this.tnsaccountpartnerinfoP.partnerMainFax=this.OrderInfoP[0].partnerMainFax;
        this.tnsaccountpartnerinfoP.partnerContact=this.OrderInfoP[0].partnerContact;
        this.tnsaccountpartnerinfoP.partnerEmail=this.OrderInfoP[0].partnerEmail;
        this.tnsaccountpartnerinfoP.partnerCountryId=this.OrderInfoP[0].partnerCountryId;
        this.tnsaccountpartnerinfoP.partnerCountryName=this.OrderInfoP[0].partnerCountryName;

        this.accountreferenceP.bosContract = this.OrderInfoP[0].bosContract;
        this.accountreferenceP.fmbosContract = this.OrderInfoP[0].fmbosContract;         
        this.accountreferenceP.custRefNumber = this.OrderInfoP[0].custRefNumber;
        this.accountreferenceP.carrierProNbr = this.OrderInfoP[0].carrierProNbr;
        this.accountreferenceP.pONumber = this.OrderInfoP[0].pONumber;
        this.OrderShippingInfoP = info[1];
        console.log(info);
        this.consignmentInfo = info;
        this.onShippingInfoclicked(this.OrderShippingInfoP);
        this.consignmentTabClicked(this.consignment);
      }
    );
  }

  onShippingInfoclicked(OrderShippingInfoP){
    //this._OrderInfoService.getordershippingInfo(Number(this.orderIdP))
    //.subscribe((info)=>{
        
        
        this.tnsaccountoriginaddressP.oaddress1 = this.OrderShippingInfoP.oaddress1;
        this.tnsaccountoriginaddressP.oaddress2 = this.OrderShippingInfoP.oaddress2;
        this.tnsaccountoriginaddressP.ocity = this.OrderShippingInfoP.ocity;
        this.tnsaccountoriginaddressP.ozip = this.OrderShippingInfoP.ozip;
        this.tnsaccountoriginaddressP.ostateId = this.OrderShippingInfoP.ostateId;
        this.tnsaccountoriginaddressP.ocountrycode = this.OrderShippingInfoP.ocountrycode;
        this.tnsaccountoriginaddressP.oName = this.OrderShippingInfoP.oName;
        this.tnsaccountoriginaddressP.oPhone = this.OrderShippingInfoP.oPhone;
        this.tnsaccountoriginaddressP.oCellPhone = this.OrderShippingInfoP.oCellPhone;
        this.tnsaccountoriginaddressP.oEmail = this.OrderShippingInfoP.oEmail;
        this.tnsaccountoriginaddressP.oWorkphone = this.OrderShippingInfoP.oEmail;
        
        this.tnsaccountdestinationaddressP.daddress1 = this.OrderShippingInfoP.daddress1;
        this.tnsaccountdestinationaddressP.daddress2 = this.OrderShippingInfoP.daddress2;
        this.tnsaccountdestinationaddressP.dcity = this.OrderShippingInfoP.dcity;
        this.tnsaccountdestinationaddressP.dzip = this.OrderShippingInfoP.dzip;
        this.tnsaccountdestinationaddressP.dstateId = this.OrderShippingInfoP.dstateId;
        this.tnsaccountdestinationaddressP.dcountrycode = this.OrderShippingInfoP.dcountrycode;
        this.tnsaccountdestinationaddressP.dName = this.OrderShippingInfoP.dName;
        this.tnsaccountdestinationaddressP.dPhone = this.OrderShippingInfoP.dPhone;
        this.tnsaccountdestinationaddressP.dCellPhone = this.OrderShippingInfoP.dCellPhone;
        this.tnsaccountdestinationaddressP.dEmail = this.OrderShippingInfoP.dEmail;
        this.tnsaccountdestinationaddressP.dWorkphone = this.OrderShippingInfoP.dEmail;

 
      //}
    //);
  }

  consignmentTabClicked(consignmentInfo) {
    console.log("yes");
    console.log(this.consignmentInfo);
    // this._OrderInfoService.getconsignmentInfo(Number(this.consignmentInfo))
    //   .subscribe((info) => {
        //this.consignmentInfo = info;
        this.consignment = this.consignmentInfo[0];
        this.products = this.consignmentInfo[2];        
        console.log("products: "+this.products[0].productDescription);
     // });
  }

  ngOnInit() {


    this.localaddress = new Address();
    this.localaddress.uspaste = "";
    this.localaddress.name = "";
    this.localaddress.address1 = "";
    this.localaddress.address2 = "";
    this.localaddress.city = "";
    this.localaddress.state = "";
    this.localaddress.country = "";
    this.localaddress.zip = "";

    this.localaddress2 = new Address();
    this.localaddress2.uspaste = "";
    this.localaddress2.name = "";
    this.localaddress2.address1 = "";
    this.localaddress2.address2 = "";
    this.localaddress2.city = "";
    this.localaddress2.state = "";
    this.localaddress2.country = "";
    this.localaddress2.zip = "";

    this.localaddress3 = new Address();
    this.localaddress3.uspaste = "";
    this.localaddress3.name = "";
    this.localaddress3.address1 = "";
    this.localaddress3.address2 = "";
    this.localaddress3.city = "";
    this.localaddress3.state = "";
    this.localaddress3.country = "";
    this.localaddress3.zip = "";

    this.localaddress4 = new Address();
    this.localaddress4.uspaste = "";
    this.localaddress4.name = "";
    this.localaddress4.address1 = "";
    this.localaddress4.address2 = "";
    this.localaddress4.city = "";
    this.localaddress4.state = "";
    this.localaddress4.country = "";
    this.localaddress4.zip = "";

    jQuery(document).ready(function () {
      jQuery(".sidebar-toggle .navbar-toggle").click(function () {
          jQuery("body").toggleClass("sidebar-fixed");
      });
      jQuery(".nav-dropdown .nav-dropdown-toggle").click(function () {
          jQuery(this).parent().toggleClass("open");
      });
      jQuery(".aside-toggle").click(function () {
        jQuery("body").toggleClass("aside-fixed");
      });

  
      jQuery(".flashMessage").hide();
  
 

      jQuery("#p2pradio").click();
      
  
  }); /*end of doucment ready*/
  
    
    
  
  /* function for background color in login page starts*/
  function alertMessage() {
      jQuery(".flashMessage").fadeIn(700).delay(2000).fadeOut(700);
  }
  
 }

  valuechange(newValue) {
    var array = newValue.split(",");
    for ( var i = 0; i < array.length; i++ ) {
        if(i == 0) {this.localaddress.name = array[i]}
        if(i == 1) {this.localaddress.address1 = array[i]}
        if(i == 2) {this.localaddress.address2 = array[i]}
        if(i == 3) {this.localaddress.city = array[i]}
        if(i == 4) {this.localaddress.state = array[i]}
        if(i == 5) {this.localaddress.country = array[i]}
        if(i == 6) {this.localaddress.zip = array[i]}
    }

  }

  valuechange2(newValue) {
    var array2 = newValue.split(",");
    for ( var i = 0; i < array2.length; i++ ) {
        if(i == 0) {this.localaddress2.name = array2[i]}
        if(i == 1) {this.localaddress2.address1 = array2[i]}
        if(i == 2) {this.localaddress2.address2 = array2[i]}
        if(i == 3) {this.localaddress2.city = array2[i]}
        if(i == 4) {this.localaddress2.state = array2[i]}
        if(i == 5) {this.localaddress2.country = array2[i]}
        if(i == 6) {this.localaddress2.zip = array2[i]}
    }

  }

  valuechange3(newValue) {
    var array3 = newValue.split(",");
    for ( var i = 0; i < array3.length; i++ ) {
        if(i == 0) {this.localaddress3.address1 = array3[i]}
        if(i == 1) {this.localaddress3.address2 = array3[i]}
        if(i == 2) {this.localaddress3.city = array3[i]}
        if(i == 3) {this.localaddress3.state = array3[i]}
        if(i == 4) {this.localaddress3.country = array3[i]}
        if(i == 5) {this.localaddress3.zip = array3[i]}
    }

  }

  valuechange4(newValue) {
    var array4 = newValue.split(",");
    for ( var i = 0; i < array4.length; i++ ) {
        if(i == 0) {this.localaddress4.name = array4[i]}
        if(i == 1) {this.localaddress4.address1 = array4[i]}
        if(i == 2) {this.localaddress4.address2 = array4[i]}
        if(i == 3) {this.localaddress4.city = array4[i]}
        if(i == 4) {this.localaddress4.state = array4[i]}
        if(i == 5) {this.localaddress4.country = array4[i]}
        if(i == 6) {this.localaddress4.zip = array4[i]}
    }

  }

  ngAfterViewChecked() {
      this.refreshSelect();
  }
  ngAfterViewInit() {
      this.refreshSelect();
  }
}

