import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountaddress} from './account-address';


@Component({
  selector: 'app-account-address',
  templateUrl: './account-address.component.html',
  styleUrls: ['./account-address.component.css']  
})

export class AccountAddressComponent implements OnInit {  
  @Input() tnsaddress: accountaddress;
  
  constructor() { 
    this.tnsaddress = new accountaddress();    
  }
  
  ngOnInit() {
  }

}
