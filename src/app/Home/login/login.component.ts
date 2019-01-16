import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AuthenticationComponent implements OnInit {


  public user: UserLogin;
  constructor(private authenticationServ: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.user = new  UserLogin();
    this.user.userType = 'COMPANY';
  }


  public login() {
    const ob = this.authenticationServ.login(this.user);
    ob.subscribe(data => {
      alert('Login Complete');
      this.router.navigate(['/home']);
    });
  }

  public fillCustomer() {
    this.user = new  UserLogin(1, 'patric', 'a@b', 'asdss234', 'CUSTOMER'); //
  }

  public fillCompany() {
    this.user = new  UserLogin(1, 'BBB', 'BBB@gmail.com', '1234bBBb', 'COMPANY'); //
  }

  public fillAdmin() {
    this.user = new  UserLogin(1, 'admin', 'admin@coupons', 'qwer1234', 'ADMIN'); //
  }

}
