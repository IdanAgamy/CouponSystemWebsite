import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompanyListComponent, CompanyComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CompaniesModule { }
