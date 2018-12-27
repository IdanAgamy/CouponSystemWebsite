import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/Models/coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  public coupon: Coupon;

  constructor(private couponServ: CouponService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const couponId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    const ob = this.couponServ.getCouponByCouponID(couponId);
    ob.subscribe(coupon => this.coupon = coupon);
  }

}
