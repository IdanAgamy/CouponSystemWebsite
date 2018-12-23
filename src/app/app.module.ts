import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Home/layout/layout.component';
import { HeaderComponent } from './Home/header/header.component';
import { FooterComponent } from './Home/footer/footer.component';
import { ProfileMenueComponent } from './Home/profile-menue/profile-menue.component';
import { HomeComponent } from './Home/home/home.component';
import { Page404Component } from './Home/page404/page404.component';
import { CouponsModule } from './coupons/coupons.module';
import { CompaniesModule } from './companies/companies.module';
import { CustomersModule } from './customers/customers.module';
import { RegisterComponent } from './Home/register/register.component';
import { LoginComponent } from './Home/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CouponsModule,
    CompaniesModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
