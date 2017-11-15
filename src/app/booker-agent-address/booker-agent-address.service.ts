import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {accountbookeraddress} from './booker-agent-address';
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class AccountBookerAddressService {

  private _url = "http://localhost:3000/accountbilladdress/";    
  
  constructor(private _http: Http) {
  }

  getAccountBillAddress(accountId: Number) {
      return this._http.get(this._url + "?id=" + accountId)
          .map(resp => resp.json())        
  }
  
}
