import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/Models/coupon';

@Component({
  selector: 'app-coupon-table',
  templateUrl: './coupon-table.component.html',
  styleUrls: ['./coupon-table.component.css']
})
export class CouponTableComponent implements OnInit {

  @Input()
  public coupons: Coupon;

  constructor() { }

  ngOnInit() {
  }

}
