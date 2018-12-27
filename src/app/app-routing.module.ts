import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { Page404Component } from './Home/page404/page404.component';
import { CouponListComponent } from './coupons/coupon-list/coupon-list.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { RegisterComponent } from './Home/register/register.component';
import { LoginComponent } from './Home/login/login.component';
import { CouponComponent } from './coupons/coupon/coupon.component';
import { CompanyComponent } from './companies/company/company.component';
import { CustomerComponent } from './customers/customer/customer.component';

const routes: Routes = [
  {path: 'home',     component: HomeComponent},
  {path: 'coupons', component: CouponListComponent},
  {path: 'companies', component: CompanyListComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'coupons/:id', component: CouponComponent},
  {path: 'companies/:id', component: CompanyComponent},
  {path: 'customers/:id', component: CustomerComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path: '**',   component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
