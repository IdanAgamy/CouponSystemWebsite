import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { Coupon } from 'src/app/Models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponService } from 'src/app/services/coupon.service';
import { Router } from '@angular/router';

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
    private companyServ: CustomerService,
    private couponServ: CouponService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user.userID = parseInt(localStorage.getItem('userID'), 10);
    this.user.name = localStorage.getItem('userName');
    this.user.email = localStorage.getItem('userEmail');
    this.user.userType = localStorage.getItem('userType');

    if (this.user.userType === 'CUSTOMER') {
      const ob = this.couponServ.getAllCouponyByCustomerID();
      ob.subscribe(coupons => this.coupons = coupons);
    } else if (this.user.userType === 'COMPANY') {
      const ob = this.couponServ.getAllCouponyByCompanyID(this.user.userID);
      ob.subscribe(coupons => this.coupons = coupons);
    }
  }
  public updateAcc() {

  }

  public deleteAcc() {
    if (this.user.userType === 'CUSTOMER') {
    } else if (this.user.userType === 'COMPANY') {
    }
  }

  public createCoupon() {
    this.router.navigate(['/createCoupon']);
  }
}
