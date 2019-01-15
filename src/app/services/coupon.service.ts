import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Coupon } from '../Models/coupon';
import { catchError, tap } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService {


  private url = 'http://localhost:8080/CouponManagmentSystemVer3/coupons';

  constructor(private http: HttpClient, private errorServ: ErrorService) { }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public getCouponByCouponID(couponID: number): Observable<Coupon> {
    return this.http.get<Coupon>(this.url + '/' + couponID, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public getAllCouponyByCompanyID(companyID: number): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url + '/byCompanyID?companyID=' + companyID, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }
  // TODO- remove header and parameter.
  public getAllCouponyByCustomerID(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url + '/purchasedCoupons', { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  createCoupon(coupon: Coupon): Observable<Coupon> {
    return this.http.post<Coupon>(this.url, coupon, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    return this.http.put<Coupon>(this.url, coupon, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public deleteCoupon(couponID: number): Observable<Coupon> {
    return this.http.delete<Coupon>(this.url + '/' + couponID,  { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public purchesCoupon(couponID: number): Observable<number> {
    return this.http.post<number>(this.url + '/' + couponID + '/buyCoupon', couponID, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public cancelPurchase(couponID: number): Observable<number> {
    return this.http.delete<number>(this.url + '/' + couponID + '/removeBoughtCoupon', { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public getNewestCoupon(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url + '/newest',  { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public getCouponByType(couponType: string): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url + '/byCouponType?couponType=' + couponType,  { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }
  public getCouponsUpToPrice(price: number): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.url + '/upToPrice?price=' + price,  { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  getCouponsUpToEndDate(endDtaeStr: string): any {
    return this.http.get<Coupon[]>(this.url + '/upToEndDate?endDate=' + endDtaeStr,  { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  // private handleError(error: HttpErrorResponse) {
  //   this.errorServ.errorHandler(error);
  //   return throwError('An error accured');
  // }

}
