import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountoriginaddress} from './account-origin-detail';

@Component({
  selector: 'app-account-origin-detail',
  templateUrl: './account-origin-detail.component.html',
  styleUrls: ['./account-origin-detail.component.css']
})
export class AccountOriginDetailComponent implements OnInit {
  @Input() tnsaccountoriginaddress: accountoriginaddress;
  
  constructor() { 
    this.tnsaccountoriginaddress = new accountoriginaddress();    
  }
  
  ngOnInit() {
  }

}
