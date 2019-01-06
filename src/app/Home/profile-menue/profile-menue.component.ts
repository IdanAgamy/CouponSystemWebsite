import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menue',
  templateUrl: './profile-menue.component.html',
  styleUrls: ['./profile-menue.component.css']
})
export class ProfileMenueComponent implements OnInit {

  // public logedin = false;
  constructor(private authenticationServ: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  isLogedin(): boolean {
    return !!localStorage.getItem('loggedin');
  }

  logOut() {
    let ob = this.authenticationServ.logout();
    ob.subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

}
