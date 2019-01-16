import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Coupon } from 'src/app/Models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public startDate: NgbDate;
  public endDate: NgbDate;
  public today = this.calendar.getToday();
  public hasSelectedType = false;
  public couponId: number;
  public couponTypes = ['Restaurants', 'Food', 'Electronics', 'Holiday', 'Health', 'Sport', 'Camping', 'Traveling'];

  public coupon: Coupon;

  constructor(private calendar: NgbCalendar,
    private activatedRoute: ActivatedRoute,
    private couponServ: CouponService, private router: Router) { }

  ngOnInit() {
    this.couponId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    const ob = this.couponServ.getCouponByCouponID(this.couponId);
    ob.subscribe(coupon => {
      this.coupon = coupon;
      this.startDate = this.today;
      this.endDate = this.stringToNgbDate(coupon.couponEndDate);
    });
  }

  public updateCoupon() {
    this.coupon.couponStartDate = this.ngbDateToString(this.startDate);
    this.coupon.couponEndDate = this.ngbDateToString(this.endDate);
    this.coupon.couponImage = 'some image address';
    const ob = this.couponServ.updateCoupon(this.coupon);
    ob.subscribe(data => {
      this.router.navigate(['/profile']);
    });
  }

  private ngbDateToString(ngbdate: NgbDate): string {
    return ngbdate.year + '-' + ngbdate.month + '-' + ngbdate.day;
  }

  public validateCouonType(event) {
    if (this.coupon.couponType === '') {
      this.hasSelectedType = false;
    } else {
      this.hasSelectedType = true;
    }
  }

  private stringToNgbDate(date: string): NgbDate {
    const strArr = date.split('-', 3);
    return new NgbDate(+strArr[0], +strArr[1], +strArr[2]);
  }

}
