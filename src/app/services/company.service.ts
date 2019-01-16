import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Company } from '../Models/company';
import { tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = 'http://localhost:8080/CouponManagmentSystemVer3/rest/companies';

  constructor(private http: HttpClient, private errorServ: ErrorService) { }


  creatCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.url, company, { withCredentials: true }).pipe(
      tap(data => {
        localStorage.setItem('userID', String(data.companyId));
        localStorage.setItem('userName', data.companyName);
        localStorage.setItem('userEmail', data.companyEmail);
        localStorage.setItem('userType', 'COMPANY');
        localStorage.setItem('loggedin', 'true'); }
      ), catchError(err => this.errorServ.errorHandler(err)));
  }

  public getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public getCompanyByCompanyID(companyID: number): Observable<Company> {
    return this.http.get<Company>(this.url + '/' + companyID, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(this.url, company, { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  public deleteCompany(companyID: number): Observable<Company> {
    return this.http.delete<Company>(this.url + '/' + companyID,  { withCredentials: true }).pipe(
      tap(data => {
        if (localStorage.getItem('userType') !== 'ADMIN') {
          localStorage.clear();
         }
       }),
       catchError(err => this.errorServ.errorHandler(err))
     );
  }

  public getCompanyByName(companyName: string) {
    return this.http.get<Company>(this.url + '/' + companyName + '/byCompanyName', { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }
  public getCompanyByEmail(companyEmail: string) {
    return this.http.get<Company>(this.url + '/' + companyEmail + '/byCompanyEmail', { withCredentials: true }).pipe(
      catchError(err => this.errorServ.errorHandler(err)));
  }

  // private handleError(error: HttpErrorResponse) {
  //   this.errorServ.errorHandler(error);
  //   return throwError('An error accured');
  // }
}
