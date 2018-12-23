import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomerListComponent, CustomerComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CustomersModule { }
