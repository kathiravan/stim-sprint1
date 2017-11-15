import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {accountbilladdress} from './account-bill-address';
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class AccountBillAddressService {

  private _url = "http://localhost:3000/accountbilladdress/";    
  
  constructor(private _http: Http) {
  }

  getAccountBillAddress(accountId: Number) {
    console.log("2");
      return this._http.get(this._url + "?id=" + accountId)
          .map(resp => resp.json())        
  }
  
}
