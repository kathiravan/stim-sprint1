import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, Jsonp } from '@angular/http';
import {OrderInfo} from './order';
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class OrderInfoService {

  private _url = "http://test-providence:6060/oms/viewcontract/";    
  private _urlorigindestination = "http://test-providence:6060/oms/viewcontract/";   
  
  /*[
    {
      "primaryPartnerId": 1264,
      "performingPartner": "Champagne Logistics/Raleigh 7644- Home Express",
      "partnerAddress1": "324 Park Knoll Dr",
      "partnerAddress2": "",
      "partnerCity": "Morrisville",
      "partnerStateId": "NC",
      "partnerZip": "27560",
      "partnerMainPhone": "919-991-0516",
      "partnerMainFax": "919-991-1103",
      "partnerContact": "Ashley Bunn, Kevin Fields, Miranda Combs",
      "partnerEmail": "mcombs@champagnelogistics.com;abunn@champagnelogistics.com; kfields@champagnelogistics.com",
      "partnerCountryId": 1,
      "partnerStateName": "North Carolina",
      "projectid": 1225712,
      "customerid": "1797",
      "customerName": "YRC / Overstock.Com   (INACTIVE)",
      "scacid": "OVST",
      "cbaddress1": "PO BOX 755",
      "cbaddress2": null,
      "cbcity": "RIVERTON",
      "cbstateId": "UT",
      "cbzip": "84065",
      "cbmainPhone": "866 880 9188",
      "cbmainFax": "314 344 2345",
      "bookerName": "YRC Final Mile",
      "contactName": "Heather Wright",
      "contactPhone": "877-903-0636",
      "salesrep": "23",
      "orderStatusID": 40,
      "serviceLevelID": 3,
      "custRefNumber": null,
      "freightAvailable": null,
      "deliveryDate": "2014-07-31",
      "claimFlag": 0,
      "pONumber": "137358103-86371",
      "bosContract": "",
      "fmbosContract": "",
      "customerCarrierId": 0,
      "milesToResidence": 16.4,
      "carrierProNbr": "2206875202",
      "salesPersonName": "Mike Bergin",
      "cbCountryId": 1,
      "cbStateName": "Utah",
      "cbEmail": "",
      "cbCountryName": "United States",
      "billofLading": "",
      "loadPick_Up_Date_From": "2014-07-18",
      "loadPick_Up_Date_To": "2014-07-18",
      "deliveryDate_From": "2014-07-26",
      "deliveryDate_To": "2014-07-26",
      "estimatedDeliveryDate": "2014-07-18",
      "requestedDeliveryTime": "",
      "transpotationType": " YRC Standard LTL",
      "willAdvice": 0,
      "totalServiceCharge": 0,
      "transTypeId": 39,
      "orderTemplate": "Total Solution",
      "serviceLevelDesc": "Basic",
      "countryName": "United States",
      "partnerCountryName": "United States"
    },
    {
      "oaddress1": "1155 N. Gertrude Avenue",
      "oaddress2": "",
      "ocity": "Stockton",
      "ostateId": "CA",
      "ozip": "95215",
      "ocountrycode": "USA",
      "daddress1": "10552 Clubmont Ln",
      "daddress2": "",
      "dcity": "Raleigh",
      "dstateId": "NC",
      "dzip": "27617",
      "dcountrycode": "USA",
      "projectid": 0,
      "oName": "",
      "oPhone": "2099431126",
      "oCellPhone": null,
      "oEmail": null,
      "oWorkphone": "2099431126",
      "dName": "",
      "dPhone": "(919) 451-5649",
      "dCellPhone": "(919) 451-5649",
      "dEmail": null,
      "dWorkphone": "(919) 451-5649"
    },
    [
      {
        "orderInvNumber": 9965372,
        "projectID": 1225712,
        "accountNumber": 1797,
        "productNumber": "1",
        "typeCode": 1,
        "productDescription": "See order notes for Description",
        "weight": 123,
        "pieces": 2,
        "cubes": 0,
        "parts": 0,
        "modelNumber": "",
        "serialNumber": "",
        "meter": "",
        "condition": "",
        "nMFC": "",
        "iTN": "",
        "iTNInDate": "1900-01-01",
        "height": 0,
        "width": 0,
        "length": 0,
        "videoPath": null
      }
    ],
    [
      {
        "projectId": 1225712,
        "partnerId": 1264,
        "projectActivitiesId": 3822846,
        "projectRateID": 4193652,
        "createdBy": "AutoOrdr",
        "lastModifiedBy": "creech",
        "activityDate": "2014-07-30",
        "units": 0,
        "description": "Delivery Charge",
        "partnerRate": 40,
        "customerRate": 54.75,
        "uomDesc": "Flat Rate",
        "comments": null,
        "reportNumber": "",
        "newCustomerRate": 0,
        "newCustomerUnit": 0,
        "newPartnerRate": 0,
        "newPartnerUnits": 0,
        "contractNotes": "",
        "accountInstruction": "",
        "billed": ""
      },
      {
        "projectId": 1225712,
        "partnerId": 1264,
        "projectActivitiesId": 3822846,
        "projectRateID": 4193652,
        "createdBy": "AutoOrdr",
        "lastModifiedBy": "creech",
        "activityDate": "2014-07-30",
        "units": 0,
        "description": "Delivery Charge",
        "partnerRate": 40,
        "customerRate": 54.75,
        "uomDesc": "Flat Rate",
        "comments": null,
        "reportNumber": "",
        "newCustomerRate": 0,
        "newCustomerUnit": 0,
        "newPartnerRate": 0,
        "newPartnerUnits": 0,
        "contractNotes": "",
        "accountInstruction": "",
        "billed": ""
      },
      {
        "projectId": 1225712,
        "partnerId": 1264,
        "projectActivitiesId": 3822846,
        "projectRateID": 4193652,
        "createdBy": "AutoOrdr",
        "lastModifiedBy": "creech",
        "activityDate": "2014-07-30",
        "units": 0,
        "description": "Delivery Charge",
        "partnerRate": 40,
        "customerRate": 54.75,
        "uomDesc": "Flat Rate",
        "comments": null,
        "reportNumber": "",
        "newCustomerRate": 0,
        "newCustomerUnit": 0,
        "newPartnerRate": 0,
        "newPartnerUnits": 0,
        "contractNotes": "",
        "accountInstruction": "",
        "billed": ""
      },
      {
        "projectId": 1225712,
        "partnerId": 1264,
        "projectActivitiesId": 3822846,
        "projectRateID": 4193652,
        "createdBy": "AutoOrdr",
        "lastModifiedBy": "creech",
        "activityDate": "2014-07-30",
        "units": 0,
        "description": "Delivery Charge",
        "partnerRate": 40,
        "customerRate": 54.75,
        "uomDesc": "Flat Rate",
        "comments": null,
        "reportNumber": "",
        "newCustomerRate": 0,
        "newCustomerUnit": 0,
        "newPartnerRate": 0,
        "newPartnerUnits": 0,
        "contractNotes": "",
        "accountInstruction": "",
        "billed": ""
      },
      {
        "projectId": 1225712,
        "partnerId": 1264,
        "projectActivitiesId": 3822846,
        "projectRateID": 4193652,
        "createdBy": "AutoOrdr",
        "lastModifiedBy": "creech",
        "activityDate": "2014-07-30",
        "units": 0,
        "description": "Delivery Charge",
        "partnerRate": 40,
        "customerRate": 54.75,
        "uomDesc": "Flat Rate",
        "comments": null,
        "reportNumber": "",
        "newCustomerRate": 0,
        "newCustomerUnit": 0,
        "newPartnerRate": 0,
        "newPartnerUnits": 0,
        "contractNotes": "",
        "accountInstruction": "",
        "billed": ""
      }
    ]
  ]*/
  
  constructor(private _http: Http) {
  }


  getorderInfo(orderId: Number) {
    var options = new RequestOptions({
      headers: new Headers({
        'Access-Control-Allow-Origin': '*'
      })
    });
      return this._http.get(this._url + orderId)
          .map(resp => resp.json())        
  }

  // getordershippingInfo(orderId: Number) {
  //   var options = new RequestOptions({
  //     headers: new Headers({
  //       'Access-Control-Allow-Origin': '*'
  //     })
  //   });
  //     return this._http.get(this._urlorigindestination + orderId)
  //         .map(resp => resp.json())        
  // }
  
}
