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

  @Input()
  public pageSource: string;

  constructor() { }

  ngOnInit() {
  }

  public canDelete(): boolean {
    return (this.pageSource === 'coupon') ||
           (this.pageSource === 'company') ||
           (this.pageSource === 'customer');
  }

}
