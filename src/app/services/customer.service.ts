import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
      ), catchError(this.errorServ.errorHandler));
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url, { withCredentials: true }).pipe(
      catchError(this.errorServ.errorHandler));
  }

  public getCustomerIDByCustomerID(customerID: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + '/' + customerID, { withCredentials: true }).pipe(
      catchError(this.errorServ.errorHandler));
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.url, customer, { withCredentials: true });
  }

  public deleteCustomer(customerID: number): Observable<Customer> {
    return this.http.delete<Customer>(this.url + '/' + customerID,  { withCredentials: true }).pipe(
      tap(data => localStorage.clear(), catchError(this.errorServ.errorHandler))
    );
  }
}
