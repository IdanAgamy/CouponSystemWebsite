import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  // {
  //   "headers":{"normalizedNames":{},"lazyUpdate":null},
  //   "status":622,
  //   "statusText":"OK",
  //   "url":"http://localhost:8080/CouponManagmentSystemVer3/companies",
  //   "ok":false,"name":"HttpErrorResponse",
  //   "message":"Http failure response for http://localhost:8080/CouponManagmentSystemVer3/companies: 622 OK",
  //   "error":{
  //     "errorCode":622,
  //     "errorType":"COOKIES_LOST",
  //     "errorMessage":"Mon Jan 14 21:49:52 IST 2019 problem with cookies.",
  //     "inputErrorTypes":null
  //   }
  // }

  public errorHandler(error: HttpErrorResponse) {
    const status = error.status;
    const errorType = error.error.errorType;
    const errorMessage = error.error.errorMessage;
    const inputErrorTypes = error.error.inputErrorTypes;
    switch (status) {
      case 0: {
        alert('Status: ' + status + '. No connection with server, please try again later.');
        break;
      }
      case 401: {
        alert('Status: ' + status + '. Wrong user name or paswword, please try again.');
        break;
      }
      case 621: {
        alert('Status: ' + status + '. ' + errorType + ', ' + errorMessage + ' Please try again.');
        break;
      }
      case 622: {
        alert('Status: ' + status + '. ' + errorType + ', ' + errorMessage + ' Please log in again.');
        break;
      }
      case 620: {
        alert('Status: ' + status + '. ' + errorType + ', ' + errorMessage);
        break;
      }
      case 603: {
        alert('Status: ' + status + '. ' + errorType + ', ' + errorMessage);
        break;
      }
      case 608: {
        alert('Status: ' + status + '. ' + errorType + ', ' + errorMessage + ' Please pick another name.');
        break;
      }
      case 609: {
        alert('Status: ' + status + '. ' + errorType + ', ' + errorMessage + ' Please use another Email.');
        break;
      }
      case 602: {
        alert('Status: ' + status + '. ' + errorType + ', ' + errorMessage);
        break;
      }
    }
    console.log(JSON.stringify(error));
    return throwError('An error accured');
  }
}
