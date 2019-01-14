import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Coupon } from 'src/app/Models/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-creat-coupon',
  templateUrl: './creat-coupon.component.html',
  styleUrls: ['./creat-coupon.component.css']
})
export class CreatCouponComponent implements OnInit {

  public startDate: NgbDate;
  public endDate: NgbDate;
  public today = this.calendar.getToday();
  public hasSelectedType = false;
  public couponTypes = ['Restaurants', 'Food', 'Electronics', 'Holiday', 'Health', 'Sport', 'Camping', 'Traveling'];

  public coupon = new Coupon();

  constructor(private calendar: NgbCalendar, private couponServ: CouponService) { }

  ngOnInit() {
    const companyID = parseInt(localStorage.getItem('userID'), 10);
    this.coupon.companyID = companyID;
    this.startDate = this.today;
  }

  public createCoupon() {
    this.coupon.couponStartDate = this.ngbDateToString(this.startDate);
    this.coupon.couponEndDate = this.ngbDateToString(this.endDate);
    this.coupon.couponImage = 'some image address';
    // alert(JSON.stringify(this.coupon));
    const ob = this.couponServ.createCoupon(this.coupon);
    ob.subscribe();
  }

  private ngbDateToString(ngbdate: NgbDate): string {
    return ngbdate.year + '-' + ngbdate.month + '-' + ngbdate.day;
  }

  validatePrimaryLanguage(event) {
    if (this.coupon.couponType === '') {
      this.hasSelectedType = false;
    } else {
      this.hasSelectedType = true;
    }
  }

}
