import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountreference} from './account-reference';
@Component({
  selector: 'app-account-reference',
  templateUrl: './account-reference.component.html',
  styleUrls: ['./account-reference.component.css']
})
export class AccountReferenceComponent implements OnInit {
  @Input() tnsaccountreference: accountreference;
  
  claimFlag = '';
  
  constructor() { 
   this.tnsaccountreference= new accountreference();
  }

  ngOnInit() {
  }

}
