import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountoriginaddress} from '../account-origin-detail';

@Component({
  selector: 'app-origin-contact-info',
  templateUrl: './origin-contact-info.component.html',
  styleUrls: ['./origin-contact-info.component.css']
})
export class OriginContactInfoComponent implements OnInit {
  @Input() tnsaccountoriginaddress: accountoriginaddress;
  
  constructor() { 
    this.tnsaccountoriginaddress = new accountoriginaddress();    
  }
  
  ngOnInit() {
  }

}
