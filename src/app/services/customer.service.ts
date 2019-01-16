import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Customer } from '../Models/customer';
import { tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:8080/CouponManagmentSystemVer3/customers';

  constructor(private http: HttpClient, private errorServ: ErrorService) { }

  public creatCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer, { withCredentials: true }).pipe(
      tap(data => {
        localStorage.setItem('userID', String(data.customerId));
        localStorage.setItem('userName', data.customerName);
        localStorage.setItem('userEmail', data.customerEmail);
        localStorage.setItem('userType', 'CUSTOMER');
        localStorage.setItem('loggedin', 'true'); }
      ), catchError(err => this.errorServ.errorHandler(err)));
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public getCustomerIDByCustomerID(customerID: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + '/' + customerID, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.url, customer, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public deleteCustomer(customerID: number): Observable<Customer> {
    return this.http.delete<Customer>(this.url + '/' + customerID,  { withCredentials: true }).pipe(
      tap(data => {
       if (localStorage.getItem('userType') !== 'ADMIN') {
         localStorage.clear();
        }
      }),
      catchError(err => this.errorServ.errorHandler(err))
    );
  }

  public getCustomerByName(customerName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url + '/byCustomerName?customerName=' + customerName, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public getCustomerByEmail(customerEmail: string): Observable<Customer> {
    return this.http.get<Customer>(this.url + '/' + customerEmail + '/byCustomerEmail', { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  // private handleError(error: HttpErrorResponse) {
  //   this.errorServ.errorHandler(error);
  //   return throwError('An error accured');
  // }
}
