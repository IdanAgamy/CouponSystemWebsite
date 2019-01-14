import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/Models/coupon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-table',
  templateUrl: './coupon-table.component.html',
  styleUrls: ['./coupon-table.component.css']
})
export class CouponTableComponent implements OnInit {

  @Input()
  public coupons: Coupon;

  @Input()
  public pageSource: string;

  @Input()
  public pageID: number;

  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  public canChange(): boolean {
    const userType = localStorage.getItem('userType');
    const userID = parseInt(localStorage.getItem('userID'), 10);


    return (this.pageSource === 'company' && this.pageID === userID && userType === 'COMPANY') ||
          //  (this.pageSource === 'customer' && this.pageID === userID && userType === 'CUSTOMER') ||
          // (this.pageSource === 'coupon') ||
           (userType === 'ADMIN');
  }

  public isCustomer(): boolean {
    const userType = localStorage.getItem('userType');
    const userID = parseInt(localStorage.getItem('userID'), 10);
    return this.pageSource === 'customer' && this.pageID === userID && userType === 'CUSTOMER';
  }

  public delteCoupon(couponID: number) {
    alert(couponID.toString());
  }

  public updateCoupon(couponID: number) {
    this.router.navigate(['coupons/update/' + couponID]);
  }

  public cancellPurchase(couponID: number) {
    alert(couponID.toString());
  }

}
