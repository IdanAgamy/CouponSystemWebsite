import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../Models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>('http://localhost:8080/CouponManagmentSystemVer3/coupons');
    // catchError(this.handleError)
    // );
  }

  public getCouponByCouponID(couponID: number): Observable<Coupon> {
    return this.http.get<Coupon>('http://localhost:8080/CouponManagmentSystemVer3/coupons/' + couponID);
    // catchError(this.handleError)
    // );
  }

  public getAllCouponyByCompanyID(companyID: number): Observable<Coupon[]> {
    return this.http.get<Coupon[]>('http://localhost:8080/CouponManagmentSystemVer3/coupons/byCompanyID?companyID=' + companyID);
    // catchError(this.handleError)
  }

  public getAllCouponyByCustomerID(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>('http://localhost:8080/CouponManagmentSystemVer3/coupons/purchasedCoupons');
    // catchError(this.handleError)
  }
}
