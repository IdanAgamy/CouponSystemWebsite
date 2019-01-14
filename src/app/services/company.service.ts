import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../Models/company';
import { tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = 'http://localhost:8080/CouponManagmentSystemVer3/companies';

  constructor(private http: HttpClient, private errorServ: ErrorService) { }


  creatCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.url, company, { withCredentials: true }).pipe(
      tap(data => {
        localStorage.setItem('userID', String(data.companyId));
        localStorage.setItem('userName', data.companyName);
        localStorage.setItem('userEmail', data.companyEmail);
        localStorage.setItem('userType', 'COMPANY');
        localStorage.setItem('loggedin', 'true'); }
      ), catchError(this.errorServ.errorHandler));
  }

  public getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url, { withCredentials: true }).pipe(
      catchError(this.errorServ.errorHandler));
  }

  public getCompanyByCompanyID(companyID: number): Observable<Company> {
    return this.http.get<Company>(this.url + '/' + companyID, { withCredentials: true }).pipe(
      catchError(this.errorServ.errorHandler));
    // catchError(this.handleError)
    // );
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(this.url, company, { withCredentials: true }).pipe(
      catchError(this.errorServ.errorHandler));
  }

  public deleteCompany(companyID: number): Observable<Company> {
    return this.http.delete<Company>(this.url + '/' + companyID,  { withCredentials: true }).pipe(
      tap(data => localStorage.clear()), catchError(this.errorServ.errorHandler)
    );
  }
}
