import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private userType: string;

  constructor(private router: Router) {}

  canActivate(): boolean {
    this.userType = localStorage.getItem('userType');
    if (this.userType === 'ADMIN') {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
