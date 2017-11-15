import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {accountbookeraddress} from './booker-agent-address';

@Component({
  selector: 'app-booker-agent-address',
  templateUrl: './booker-agent-address.component.html',
  styleUrls: ['./booker-agent-address.component.css']
})
export class BookerAgentAddressComponent implements OnInit {
  @Input() tnsaccountbookeraddress: accountbookeraddress;

  constructor() {
    this.tnsaccountbookeraddress = new accountbookeraddress(); 
   }

  ngOnInit() {
  }

}
