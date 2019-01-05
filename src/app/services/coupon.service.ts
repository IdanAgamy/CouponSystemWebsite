import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../Models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>('http://localhost:8080/CouponManagmentSystemVer3/coupons', { withCredentials: true });
    // catchError(this.handleError)
    // );
  }

  public getCouponByCouponID(couponID: number): Observable<Coupon> {
    return this.http.get<Coupon>('http://localhost:8080/CouponManagmentSystemVer3/coupons/' + couponID, { withCredentials: true });
    // catchError(this.handleError)
    // );
  }

  public getAllCouponyByCompanyID(companyID: number): Observable<Coupon[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Coupon[]>('http://localhost:8080/CouponManagmentSystemVer3/coupons/byCompanyID?companyID=' + companyID, { withCredentials: true });
    // catchError(this.handleError)
  }
  // TODO- remove header and parameter.
  public getAllCouponyByCustomerID(customerID: number): Observable<Coupon[]> {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'userType': 'CUSTOMER',
      'userID': customerID.toString(),
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<Coupon[]>('http://localhost:8080/CouponManagmentSystemVer3/coupons/purchasedCoupons', requestOptions);
    // catchError(this.handleError)
  }
}
