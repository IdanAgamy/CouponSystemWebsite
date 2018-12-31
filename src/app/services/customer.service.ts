import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:8080/CouponManagmentSystemVer3/customers';

  constructor(private http: HttpClient) { }

  creatCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer);
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
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
    return this.http.get<Customer>(this.url + customerID, requestOptions);
    // catchError(this.handleError)
    // );
  }
}
