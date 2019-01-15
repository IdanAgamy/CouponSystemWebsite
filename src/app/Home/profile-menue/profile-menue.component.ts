import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menue',
  templateUrl: './profile-menue.component.html',
  styleUrls: ['./profile-menue.component.css']
})
export class ProfileMenueComponent implements OnInit {

  public userName: string;

  constructor(private authenticationServ: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
  }

  isLogedin(): boolean {
    return !!localStorage.getItem('loggedin');
  }

  logOut() {
    const ob = this.authenticationServ.logout();
    ob.subscribe(data => {
      alert('Logging Out');
      this.router.navigate(['/home']);
    });

  }

  public isAdmin(): Boolean {
    const userType = localStorage.getItem('userType');
    return userType === 'ADMIN';
  }

}
