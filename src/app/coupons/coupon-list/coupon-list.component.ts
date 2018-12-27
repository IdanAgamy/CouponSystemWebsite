import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  public coupons: Coupon[];

  constructor(private couponServ: CouponService) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let ob = this.couponServ.getAllCoupons();
    ob.subscribe(comps => this.coupons = comps);
  }

}
