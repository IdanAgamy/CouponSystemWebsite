import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../Models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private url = 'http://localhost:8080/CouponManagmentSystemVer3/coupons';

  constructor(private http: HttpClient) { }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url, { withCredentials: true });
    // catchError(this.handleError)
    // );
  }

  public getCouponByCouponID(couponID: number): Observable<Coupon> {
    return this.http.get<Coupon>(this.url + '/' + couponID, { withCredentials: true });
    // catchError(this.handleError)
    // );
  }

  public getAllCouponyByCompanyID(companyID: number): Observable<Coupon[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Coupon[]>(this.url + '/byCompanyID?companyID=' + companyID, { withCredentials: true });
    // catchError(this.handleError)
  }
  // TODO- remove header and parameter.
  public getAllCouponyByCustomerID(customerID: number): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url + '/purchasedCoupons', { withCredentials: true });
    // catchError(this.handleError)
  }
}
