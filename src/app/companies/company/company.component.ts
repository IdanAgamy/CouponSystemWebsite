import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/company';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/Models/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public company: Company;
  public coupons: Coupon[];

  constructor(private companyServ: CompanyService,
              private couponServ: CouponService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const companyId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    const compabyOb = this.companyServ.getCompanyByCompanyID(companyId);
    compabyOb.subscribe(comp => this.company = comp);
    const couponOb = this.couponServ.getAllCouponyByCompanyID(companyId);
    couponOb.subscribe(coup => this.coupons = coup);
  }

}
