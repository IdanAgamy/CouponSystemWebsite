import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Coupon } from 'src/app/Models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-creat-coupon',
  templateUrl: './creat-coupon.component.html',
  styleUrls: ['./creat-coupon.component.css']
})
export class CreatCouponComponent implements OnInit {

  public startDate;
  public endDate;

  public coupon = new Coupon(1, 'asdfghjk', new Date('2019-10-10'), new Date('2020-10-10'), 2, 'Food',
   'qwertyuioasdfghjklzxcvbnm,qwzesrxdctfyvgubhinjxertcrfyvgubhexrtcryvtubyhextcryvtxtcyfvertyuioasdfghjklzxcvbn', 78, 'sdfghjk');

  constructor(private calendar: NgbCalendar, private couponServ: CouponService, private datepipe: DatePipe) { }

  ngOnInit() {
    const companyID = parseInt(localStorage.getItem('userID'), 10);
    this.coupon.companyID = companyID;
    this.coupon.couponStartDate = this.datepipe.transform(this.coupon.couponStartDate, 'yyyy-MM-dd');
  }

  public createCoupon() {
    const ob = this.couponServ.createCoupon(this.coupon);
    ob.subscribe();
  }

}
