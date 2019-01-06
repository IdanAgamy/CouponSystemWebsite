import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:8080/CouponManagmentSystemVer3/customers';

  constructor(private http: HttpClient) { }

  creatCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer, { withCredentials: true }).pipe(
      tap(data => {
        localStorage.setItem('userID', String(data.customerId));
        localStorage.setItem('userName', data.customerName);
        localStorage.setItem('userEmail', data.customerEmail);
        localStorage.setItem('userType', 'CUSTOMER');
        localStorage.setItem('loggedin', 'true'); }
      ));
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url, { withCredentials: true });
    // catchError(this.handleError)
    // );
  }

  // TODO- remove header
  public getCustomerIDByCustomerID(customerID: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + '/' + customerID, { withCredentials: true });
    // catchError(this.handleError)
    // );
  }
}
