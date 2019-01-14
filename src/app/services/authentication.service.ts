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


  constructor(private http: HttpClient, private errorServ: ErrorService) { }

  public login(user: UserLogin): Observable<UserLogin> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<UserLogin>('http://localhost:8080/CouponManagmentSystemVer3/login', user, { withCredentials: true }).pipe(
      tap(userInfo => {
          localStorage.setItem('userID', String(userInfo.userID));
          localStorage.setItem('userName', userInfo.name);
          localStorage.setItem('userEmail', userInfo.email);
          localStorage.setItem('userType', userInfo.userType);
          localStorage.setItem('loggedin', 'true'); }
          ), catchError(this.errorServ.errorHandler)) ;
  }

  public logout(): Observable<UserLogin> {
    return this.http.get<UserLogin>('http://localhost:8080/CouponManagmentSystemVer3/login/logout',  { withCredentials: true }).pipe(
      tap(data => {
          localStorage.clear(); }
      ), catchError(this.errorServ.errorHandler));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.status === 401) {
        alert('fuck');
      } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      }
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
