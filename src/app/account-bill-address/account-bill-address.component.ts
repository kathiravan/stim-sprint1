import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountbilladdress} from './account-bill-address';

@Component({
  selector: 'app-account-bill-address',
  templateUrl: './account-bill-address.component.html',
  styleUrls: ['./account-bill-address.component.css']
})
export class AccountBillAddressComponent implements OnInit {
  @Input() tnsaccountbilladdress: accountbilladdress;
  
  constructor() { 
    this.tnsaccountbilladdress = new accountbilladdress();    
  }

  ngOnInit() {
  }

}
