import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {accountaddress} from './account-address';
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class AccountAddressService {

  private _url = "http://localhost:3000/accountaddress/";    
  
  constructor(private _http: Http) {
  }

  getAccountAddress(accountId: Number) {
    console.log("2");
      return this._http.get(this._url + "?id=" + accountId)
          .map(resp => resp.json())        
  }
  
}
