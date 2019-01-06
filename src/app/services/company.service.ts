import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../Models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = 'http://localhost:8080/CouponManagmentSystemVer3/companies';

  constructor(private http: HttpClient) { }


  creatCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.url, company, { withCredentials: true });
  }

  public getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url, { withCredentials: true });
    // catchError(this.handleError)
    // );
  }

  public getCompanyByCompanyID(companyID: number): Observable<Company> {
    return this.http.get<Company>(this.url + '/' + companyID, { withCredentials: true });
    // catchError(this.handleError)
    // );
  }
}
