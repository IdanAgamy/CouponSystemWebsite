import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/Models/coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  public coupon: Coupon;
  private couponId: number;

  constructor(private couponServ: CouponService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    this.couponId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    const ob = this.couponServ.getCouponByCouponID(this.couponId);
    ob.subscribe(coupon => this.coupon = coupon);
  }

  public isCustomer(): boolean {
    const userType = localStorage.getItem('userType');
    return userType === 'CUSTOMER';
  }

  public purchase() {
    const ob = this.couponServ.purchesCoupon(this.couponId);
    ob.subscribe(data => {
      alert('Purchase Complete');
      this.router.navigate(['/coupons']);
    });
  }

  public isAdmin(): boolean {
    return localStorage.getItem('userType') === 'ADMIN';
  }

}
