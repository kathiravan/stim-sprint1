import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountdestinationaddress} from './account-destination-detail';

@Component({
  selector: 'app-account-destination-detail',
  templateUrl: './account-destination-detail.component.html',
  styleUrls: ['./account-destination-detail.component.css']
})
export class AccountDestinationDetailComponent implements OnInit {
  @Input() tnsaccountdestinationaddress: accountdestinationaddress;
  
  constructor() { 
    this.tnsaccountdestinationaddress = new accountdestinationaddress();    
  }
  ngOnInit() {
  }

}
