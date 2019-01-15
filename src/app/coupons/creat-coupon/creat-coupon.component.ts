import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Coupon } from 'src/app/Models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { Router } from '@angular/router';

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

  constructor(private calendar: NgbCalendar, private couponServ: CouponService, private router: Router) { }

  ngOnInit() {
    const companyID = parseInt(localStorage.getItem('userID'), 10);
    this.coupon.companyID = companyID;
    this.startDate = this.today;
  }

  public createCoupon() {
    this.coupon.couponStartDate = this.ngbDateToString(this.startDate);
    this.coupon.couponEndDate = this.ngbDateToString(this.endDate);
    this.coupon.couponImage = 'some image address';
    const ob = this.couponServ.createCoupon(this.coupon);
    ob.subscribe(data => {
      alert('Coupon Created');
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

}
