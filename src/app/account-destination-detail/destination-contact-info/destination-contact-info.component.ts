import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountdestinationaddress} from '../account-destination-detail';

@Component({
  selector: 'app-destination-contact-info',
  templateUrl: './destination-contact-info.component.html',
  styleUrls: ['./destination-contact-info.component.css']
})
export class DestinationContactInfoComponent implements OnInit {
  @Input() tnsaccountdestinationaddress: accountdestinationaddress;
  
  constructor() { 
    this.tnsaccountdestinationaddress = new accountdestinationaddress();    
  }
  ngOnInit() {
  }

}
