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


import {OrderInfo} from './order';
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
  OrderInfoP: OrderInfo;

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
    this.OrderInfoP = new OrderInfo();
    
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
    this._OrderInfoService.getorderInfo(Number(this.orderIdP),Number(this.accountIdP))
    .subscribe((info)=>{
        this.OrderInfoP = info;
        
        this.tnsaddressP.customerId = Number(this.OrderInfoP.customerid);
        this.tnsaddressP.customerName = this.OrderInfoP.customerName;
        this.tnsaddressP.customerContactName = this.OrderInfoP.contactName;
        this.tnsaddressP.customerMainPhone = this.OrderInfoP.cbmainPhone;
        this.tnsaddressP.customerSCACId = this.OrderInfoP.scacid;
        this.tnsaddressP.customerExtn = "001";

        this.tnsaccountbookeraddressP.customerBookerId = 1;
        this.tnsaccountbookeraddressP.customerBookerName = this.OrderInfoP.bookerName;
        this.tnsaccountbookeraddressP.customerBookerContactName1 = this.OrderInfoP.contactName;
        console.log(this.OrderInfoP.contactName);
        console.log(this.tnsaccountbookeraddressP.customerBookerContactName1);
        this.tnsaccountbookeraddressP.customerBookerPhone = this.OrderInfoP.contactPhone;
        this.tnsaccountbookeraddressP.customerBookerExtn = "001";

        this.tnsaccountbilladdressP.customerBillId = 1;
        this.tnsaccountbilladdressP.customerBillAddress1 = this.OrderInfoP.cbaddress1;
        this.tnsaccountbilladdressP.customerBillAddress2 = this.OrderInfoP.cbaddress2;
        this.tnsaccountbilladdressP.customerBillCity = this.OrderInfoP.cbcity;
        this.tnsaccountbilladdressP.customerBillZip = this.OrderInfoP.cbzip;
        this.tnsaccountbilladdressP.customerBillState = this.OrderInfoP.cbstateId;
        this.tnsaccountbilladdressP.customerBillCountry = "USA";

        this.tnscontracttemplateinfoP.accounttemplateId = 1;
        this.tnscontracttemplateinfoP.accountServiceLevel = this.OrderInfoP.serviceLevelID;
        this.tnscontracttemplateinfoP.accountFreightdate = this.OrderInfoP.freightAvailable;
        this.tnscontracttemplateinfoP.accountdeliverydate = this.OrderInfoP.deliveryDate;
        this.tnscontracttemplateinfoP.accountcarrierPRONumber = this.OrderInfoP.carrierProNbr;
        this.tnscontracttemplateinfoP.accountcarrierPONumber = this.OrderInfoP.pONumber;


        //for (let entry of info) {
        //}
      }
    );
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

