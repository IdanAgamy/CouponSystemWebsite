import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../Models/coupon';
import { catchError, tap } from 'rxjs/operators';

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
  public getAllCouponyByCustomerID(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url + '/purchasedCoupons', { withCredentials: true });
    // catchError(this.handleError)
  }

  createCoupon(coupon: Coupon): Observable<Coupon> {
    alert(JSON.stringify(coupon));
    return this.http.post<Coupon>(this.url, coupon, { withCredentials: true });
      // catchError(this.handleError));
    }


      public handleError(error: HttpErrorResponse) {
        console.log(JSON.stringify(error));
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    return this.http.put<Coupon>(this.url, coupon, { withCredentials: true });
  }

  public deleteCoupon(couponID: number): Observable<Coupon> {
    return this.http.delete<Coupon>(this.url + '/' + couponID,  { withCredentials: true }).pipe(
      tap(data => localStorage.clear())
    );
  }
}
