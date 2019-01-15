import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { Coupon } from 'src/app/Models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponService } from 'src/app/services/coupon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customer: Customer;
  public coupons: Coupon[];
  public userType: string;

  constructor(private customerServ: CustomerService,
    private couponServ: CouponService,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      const customerId = parseInt(this.activatedRoute.snapshot.params.id, 10);
      const customerOb = this.customerServ.getCustomerIDByCustomerID(customerId);
      customerOb.subscribe(cust => this.customer = cust);
      const couponOb = this.couponServ.getAllCouponyByCustomerID();
      couponOb.subscribe(coup => this.coupons = coup);
    }

    public isAdmin(): boolean {
      return localStorage.getItem('userType') === 'ADMIN';
    }
}
