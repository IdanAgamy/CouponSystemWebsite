import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../Models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }



  public getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://localhost:8080/CouponManagmentSystemVer3/companies');
    // catchError(this.handleError)
    // );
  }

  public getCompanyByCompanyID(companyID: number): Observable<Company> {
    return this.http.get<Company>('http://localhost:8080/CouponManagmentSystemVer3/companies/' + companyID);
    // catchError(this.handleError)
    // );
  }
}
