import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/CouponManagmentSystemVer3/customers');
    // catchError(this.handleError)
    // );
  }

  public getCustomerIDByCustomerID(customerID: number): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/CouponManagmentSystemVer3/customers/' + customerID);
    // catchError(this.handleError)
    // );
  }
}
