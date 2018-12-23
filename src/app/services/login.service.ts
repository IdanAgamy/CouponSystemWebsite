import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../Models/userLogger';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(userd: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://mysite.com/products', userd);
  }
}
