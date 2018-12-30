import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // TODO- remove header
  public getCustomerIDByCustomerID(customerID: number): Observable<Customer> {
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
    return this.http.get<Customer>('http://localhost:8080/CouponManagmentSystemVer3/customers/' + customerID, requestOptions);
    // catchError(this.handleError)
    // );
  }
}
