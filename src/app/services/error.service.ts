import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { ApplicarionError } from '../Models/applicationError';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private subject = new Subject<ApplicarionError>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          if (this.keepAfterNavigationChange) {
              // only keep for a single location change
              this.keepAfterNavigationChange = false;
          } else {
              // clear alert
              this.subject.next();
          }
      }
  });
  }

  public errorHandler(error: HttpErrorResponse) {
    console.log('in error handler');
    const status = error.status;
    if (status === 401) {
      console.log('error 401');
      this.activateAlert(status, 'Wrong user name or paswword, please try again.');
      return throwError('Wrong user name or paswword, please try again.');
    }
    const errorType = error.error.errorType;
    const errorMessage = error.error.errorMessage;
    console.log('in error handler' + status);
    // const inputErrorTypes = error.error.inputErrorTypes;
    switch (status) {
      case 0: {
        this.activateAlert(status, 'No connection with server, please try again later.');
        break;
      }
      case 621: { // BAD_INPUT
        this.activateAlert(status, errorType + ', ' + errorMessage + ' Please try again.');
        break;
      }
      case 622: { // COOKIES_LOST
        this.activateAlert(status, errorType + ', ' + errorMessage + ' Please log in again.');
        break;
      }
      case 620: { // NO_RETURN_OBJECT
        this.activateAlert(status, errorType + ', ' + errorMessage);
        break;
      }
      case 603: { // INVALID_PARAMETER
        this.activateAlert(status, errorType + ', ' + errorMessage);
        break;
      }
      case 608: { // NAME_IS_ALREADY_EXISTS
        this.activateAlert(status, errorType + ', ' + errorMessage + ' Please pick another name.');
        break;
      }
      case 609: { // EMAIL_IS_ALREADY_EXISTS
        this.activateAlert(status, errorType + ', ' + errorMessage + ' Please use another Email.');
        break;
      }
      case 602: { // GENERAL_ERROR
        this.activateAlert(status, errorType + ', ' + errorMessage);
        break;
      }
      case 605: { // SYSTEM_ERROR
        this.activateAlert(status, errorType + ', ' + errorMessage);
        break;
      }
    }
    // console.log(JSON.stringify(error));
    return throwError('An error accured');
  }

  private activateAlert (status: number, message: string) {
    // alert(message);
    this.subject.next(new ApplicarionError(status, message));
  }

  public getMessage(): Observable<ApplicarionError> {
    return this.subject.asObservable();
  }
}
