import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderComponent } from "./order.component";


const routes: Routes = [
  { path: '', component: OrderComponent},
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}