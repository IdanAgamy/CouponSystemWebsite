import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'Coupons Coupons Coupons!';
  public coupons: Coupon[];
  constructor(private couponServ: CouponService) { }

  ngOnInit() {
    const ob = this.couponServ.getNewestCoupon();
    ob.subscribe(coupons => this.coupons = coupons);
  }
}
