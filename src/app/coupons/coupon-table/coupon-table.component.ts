import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/Models/coupon';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon-table',
  templateUrl: './coupon-table.component.html',
  styleUrls: ['./coupon-table.component.css']
})
export class CouponTableComponent implements OnInit {

  @Input()
  public coupons: Coupon[];

  @Input()
  public pageSource: string;

  @Input()
  public pageID: number;

  private userType: string;
  private userID: number;

  constructor(private router: Router, private couponServ: CouponService) { }

  ngOnInit() {
    this.userID = parseInt(localStorage.getItem('userID'), 10);
    this.userType = localStorage.getItem('userType');
  }

  public canChange(): boolean {


    return (this.pageID === this.userID && this.userType === 'COMPANY') ||
          //  (this.pageSource === 'customer' && this.pageID === userID && userType === 'CUSTOMER') ||
          // (this.pageSource === 'coupon') ||
           (this.userType === 'ADMIN');
  }

  public isCustomer(): boolean {
    return (this.pageSource === 'customer' && (this.pageID === this.userID && this.userType === 'CUSTOMER' || this.userType === 'ADMIN')) ||
     (this.userType === 'CUSTOMER' && this.pageSource === 'profile');
  }

  public delteCoupon(couponID: number) {
    const ob = this.couponServ.deleteCoupon(couponID);
    ob.subscribe(data => {
      const ob2 = this.couponServ.getAllCouponyByCompanyID(this.userID);
      ob2.subscribe(coupons => {
        alert('Coupon Deleted');
        this.coupons = coupons;
      });
  });
  }

  public cancellPurchase(couponID: number) {
    const ob = this.couponServ.cancelPurchase(couponID);
    ob.subscribe(data => {
      const ob2 = this.couponServ.getAllCouponyByCustomerID();
      ob2.subscribe(coupons => {
        alert('Purchase Canceled');
        this.coupons = coupons;
      });
    });
  }

}
