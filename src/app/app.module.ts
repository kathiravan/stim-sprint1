import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OrderComponent } from './order.component';
import { AccountAddressComponent } from './account-address/account-address.component';
import { BookerAgentAddressComponent } from './booker-agent-address/booker-agent-address.component';
import { AccountBillAddressComponent } from './account-bill-address/account-bill-address.component';
import {AccountAddressService} from './account-address/account-address.service';
import {AccountBillAddressService} from './account-bill-address/account-bill-address.service';
import {AccountBookerAddressService} from './booker-agent-address/booker-agent-address.service';
import {OrderInfoService} from './order.service';
import { ContractTemplateInfoComponent } from './contract-template-info/contract-template-info.component';
import { AccountReferenceComponent } from './account-reference/account-reference.component';
import { AccountPartnerSummaryComponent } from './account-partner-summary/account-partner-summary.component';
import { AccountOriginDetailComponent } from './account-origin-detail/account-origin-detail.component';
import { AccountDestinationDetailComponent } from './account-destination-detail/account-destination-detail.component';
import { OriginContactInfoComponent } from './account-origin-detail/origin-contact-info/origin-contact-info.component';
import { DestinationContactInfoComponent } from './account-destination-detail/destination-contact-info/destination-contact-info.component';
import { AccountAddPartnerInfoComponent } from './account-add-partner-info/account-add-partner-info.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AccountAddressComponent,
    BookerAgentAddressComponent,
    AccountBillAddressComponent,
    ContractTemplateInfoComponent,
    AccountReferenceComponent,
    AccountPartnerSummaryComponent,
    AccountOriginDetailComponent,
    AccountDestinationDetailComponent,
    OriginContactInfoComponent,
    DestinationContactInfoComponent,
    AccountAddPartnerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    TooltipModule.forRoot()
  ],
  exports: [ 
    RouterModule 
  ],
  providers: [ AccountAddressService, AccountBillAddressService, OrderInfoService, AccountBookerAddressService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }


