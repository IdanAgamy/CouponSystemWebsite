import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserLogin } from '../Models/userLogger';
import { map, catchError, tap } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'http://localhost:8080/CouponManagmentSystemVer3/rest/login';

  constructor(private http: HttpClient, private errorServ: ErrorService) { }

  public login(user: UserLogin): Observable<UserLogin> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<UserLogin>(this.url, user, { withCredentials: true }).pipe(
      tap(userInfo => {
          localStorage.setItem('userID', String(userInfo.userID));
          localStorage.setItem('userName', userInfo.name);
          localStorage.setItem('userEmail', userInfo.email);
          localStorage.setItem('userType', userInfo.userType);
          localStorage.setItem('loggedin', 'true'); }
          ), catchError(err => this.errorServ.errorHandler(err)));
  }

  public logout(): Observable<UserLogin> {
    return this.http.get<UserLogin>(this.url + '/logout',  { withCredentials: true }).pipe(
      tap(data => {
          localStorage.clear(); }
      ), catchError(err => this.errorServ.errorHandler(err)));
  }
}
