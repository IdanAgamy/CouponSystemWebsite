import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserLogin } from '../Models/userLogger';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(userd: UserLogin): Observable<UserLogin> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<UserLogin>('http://localhost:8080/CouponManagmentSystemVer3/login', userd);
    // catchError(this.handleError)
    // );
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

  private something(msg: UserLogin): UserLogin {
    alert(JSON.stringify(msg));
    return new UserLogin(1, 'aa', 'aa', 'aa', 'aa');
  }
}
