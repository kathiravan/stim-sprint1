import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountpartnerinfo} from './account-add-partner-info';

@Component({
  selector: 'app-account-add-partner-info',
  templateUrl: './account-add-partner-info.component.html',
  styleUrls: ['./account-add-partner-info.component.css']
})
export class AccountAddPartnerInfoComponent implements OnInit {
  @Input() tnsaccountpartnerinfo: accountpartnerinfo;
  
  constructor() { 
    this.tnsaccountpartnerinfo = new accountpartnerinfo();    
  }
  ngOnInit() {
  }

}
