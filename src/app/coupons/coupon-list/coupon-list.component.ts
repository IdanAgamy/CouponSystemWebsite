import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  public coupons: Coupon[];
  public couponType: string;
  public price: number;
  public endDate: NgbDate;
  public today = this.calendar.getToday();
  public couponTypes = ['All', 'Restaurants', 'Food', 'Electronics', 'Holiday', 'Health', 'Sport', 'Camping', 'Traveling'];

  constructor(private calendar: NgbCalendar, private couponServ: CouponService) { }

  ngOnInit() {
    this.resetSearch();
    this.getAllCoupon();
  }

  private getAllCoupon() {
    const ob = this.couponServ.getAllCoupons();
    ob.subscribe(comps => this.coupons = comps);
  }

    private resetSearch() {
      this.couponType = this.couponTypes[0];
      this.price = null;
      this.endDate = null;
    }

  public getCouponByType(event: string) {
    this.resetSearch();
    this.couponType = event;
    if (this.couponType === 'All') {
      this.getAllCoupon();
    } else {
      const ob = this.couponServ.getCouponByType(this.couponType);
      ob.subscribe(coupons => this.coupons = coupons, error => this.coupons = null);
    }
  }

  public getCouponsUpToPrice(price: number) {
    this.resetSearch();
    if (price === null) {
      this.getAllCoupon();
    } else {
      this.price = price;
      const ob = this.couponServ.getCouponsUpToPrice(this.price);
      ob.subscribe(coupons => this.coupons = coupons, error => this.coupons = null);
    }
  }

  public getCouponsUpToEndDate(endDtae: NgbDate) {
    this.resetSearch();
    this.endDate = endDtae;
    const endDtaeStr: string = endDtae.year + '-' + endDtae.month + '-' + endDtae.day;
    const ob = this.couponServ.getCouponsUpToEndDate(endDtaeStr);
    ob.subscribe(coupons => this.coupons = coupons, error => this.coupons = null);
  }

}
