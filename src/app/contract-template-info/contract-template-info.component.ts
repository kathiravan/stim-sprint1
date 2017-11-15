import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import {contracttemplateinfo} from './contract-template-info';

@Component({
  selector: 'app-contract-template-info',
  templateUrl: './contract-template-info.component.html',
  styleUrls: ['./contract-template-info.component.css']
})
export class ContractTemplateInfoComponent implements OnInit {
  @Input() tnscontracttemplateinfo: contracttemplateinfo;

  constructor() {
    this.tnscontracttemplateinfo = new contracttemplateinfo();
   }

  ngOnInit() {
  }

}
