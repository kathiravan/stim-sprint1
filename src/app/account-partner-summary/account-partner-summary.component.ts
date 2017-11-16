import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountpartnersummary} from './account-partner-summary';

@Component({
  selector: 'app-account-partner-summary',
  templateUrl: './account-partner-summary.component.html',
  styleUrls: ['./account-partner-summary.component.css']
})
export class AccountPartnerSummaryComponent implements OnInit {
  @Input() tnsaccountpartnersummary: accountpartnersummary;
  constructor() {
    this.tnsaccountpartnersummary= new accountpartnersummary();
   }

  ngOnInit() {

  }

}
