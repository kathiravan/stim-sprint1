import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, Jsonp } from '@angular/http';
import {OrderInfo} from './order';
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class OrderInfoService {

  private _url = "http://test-providence:6060/oms/contractsummary/";    
  
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
  
}
