import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotCustomerGuard implements CanActivate {
  private userType: string;

  constructor(private router: Router) {}

  canActivate(): boolean {
    this.userType = localStorage.getItem('userType');
    if (this.userType === 'COMPANY' || this.userType === 'ADMIN') {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
