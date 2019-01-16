import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { Page404Component } from './Home/page404/page404.component';
import { CouponListComponent } from './coupons/coupon-list/coupon-list.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { RegisterComponent } from './Home/register/register.component';
import { AuthenticationComponent } from './Home/login/login.component';
import { CouponComponent } from './coupons/coupon/coupon.component';
import { CompanyComponent } from './companies/company/company.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { ProfilePageComponent } from './Home/profile-page/profile-page.component';
import { CreatCouponComponent } from './coupons/creat-coupon/creat-coupon.component';
import { UpdateCouponComponent } from './coupons/update-coupon/update-coupon.component';
import { UpdateCompanyComponent } from './companies/update-company/update-company.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';
import { AdminGuard } from './guards/admin.guard';
import { NotCompanyGuard } from './guards/notCompany.guard';
import { NotCustomerGuard } from './guards/notCustomer.guard';
import { SearchPageComponent } from './Home/search-page/search-page.component';

const routes: Routes = [
  {path: 'home',     component: HomeComponent},
  {path: 'coupons', component: CouponListComponent},
  {path: 'companies', component: CompanyListComponent},
  {path: 'customers', component: CustomerListComponent, canActivate: [AdminGuard]},
  {path: 'coupons/:id', component: CouponComponent},
  {path: 'companies/:id', component: CompanyComponent},
  {path: 'customers/:id', component: CustomerComponent, canActivate: [AdminGuard]},
  {path: 'coupons/update/:id', component: UpdateCouponComponent, canActivate: [NotCustomerGuard]},
  {path: 'companies/update/:id', component: UpdateCompanyComponent, canActivate: [NotCustomerGuard]},
  {path: 'customers/update/:id', component: UpdateCustomerComponent, canActivate: [NotCompanyGuard]},
  {path: 'searchUsers', component: SearchPageComponent, canActivate: [AdminGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: AuthenticationComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'createCoupon', component: CreatCouponComponent, canActivate: [NotCustomerGuard]},
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path: '**',   component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
