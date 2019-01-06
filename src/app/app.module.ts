import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Home/layout/layout.component';
import { HeaderComponent } from './Home/header/header.component';
import { FooterComponent } from './Home/footer/footer.component';
import { ProfileMenueComponent } from './Home/profile-menue/profile-menue.component';
import { HomeComponent } from './Home/home/home.component';
import { Page404Component } from './Home/page404/page404.component';
import { RegisterComponent } from './Home/register/register.component';
import { AuthenticationComponent } from './Home/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CouponComponent } from './coupons/coupon/coupon.component';
import { CouponListComponent } from './coupons/coupon-list/coupon-list.component';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { ErrorAlertComponent } from './Home/error-alert/error-alert.component';
import { CouponTableComponent } from './coupons/coupon-table/coupon-table.component';
import { ProfileComponent } from './users/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProfileMenueComponent,
    HomeComponent,
    Page404Component,
    RegisterComponent,
    CustomerComponent,
    CustomerListComponent,
    CouponComponent,
    CouponListComponent,
    CompanyComponent,
    CompanyListComponent,
    AuthenticationComponent,
    ErrorAlertComponent,
    CouponTableComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
