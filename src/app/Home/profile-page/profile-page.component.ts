import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { Coupon } from 'src/app/Models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponService } from 'src/app/services/coupon.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/Models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public user = new UserLogin();

  public coupons: Coupon[];

  constructor(
    private customerServ: CustomerService,
    private companyServ: CompanyService,
    private couponServ: CouponService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user.userID = parseInt(localStorage.getItem('userID'), 10);
    this.user.userType = localStorage.getItem('userType');

    if (this.user.userType === 'CUSTOMER') {
      const custOb = this.customerServ.getCustomerIDByCustomerID(this.user.userID);
      custOb.subscribe(customer => {
        this.user.name = customer.customerName;
        this.user.email = customer.customerEmail;
      });
      const ob = this.couponServ.getAllCouponyByCustomerID();
      ob.subscribe(coupons => this.coupons = coupons);
    } else if (this.user.userType === 'COMPANY') {
      const compOb = this.companyServ.getCompanyByCompanyID(this.user.userID);
      compOb.subscribe(company => {
        this.user.name = company.companyName;
        this.user.email = company.companyEmail;
      });
      const ob = this.couponServ.getAllCouponyByCompanyID(this.user.userID);
      ob.subscribe(coupons => this.coupons = coupons);
    }
  }
  public updateAcc() {
    if (this.user.userType === 'CUSTOMER') {
      this.router.navigate(['/customers/update/' + this.user.userID]);
    } else if (this.user.userType === 'COMPANY') {
      this.router.navigate(['/companies/update/' + this.user.userID]);
    }
  }

  public deleteAcc() {
    if (this.user.userType === 'CUSTOMER') {
      const ob = this.customerServ.deleteCustomer(this.user.userID);
      ob.subscribe();
      this.router.navigate(['/home']);
    } else if (this.user.userType === 'COMPANY') {
      const ob = this.companyServ.deleteCompany(this.user.userID);
      ob.subscribe();
      this.router.navigate(['/home']);
    }
  }

  public createCoupon() {
    this.router.navigate(['/createCoupon']);
  }
}
