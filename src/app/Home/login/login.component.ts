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
    // this.user.userID = 1;
    // tslint:disable-next-line:prefer-const
    let ob = this.authenticationServ.login(this.user);
    // tslint:disable-next-line:prefer-const
    ob.subscribe(data => {
      alert('Login Complete');
      this.router.navigate(['/home']);
    });
    // error => {
    //   alert(JSON.stringify(error));
    //   if (error.status === 401) {
    //     this.msg = 'wrong user name or password';
    //   } else {
    //     this.msg = 'something wrong with server';
    // }
    // });
  }

  public fillCustomer() {
    this.user = new  UserLogin(1, 'patric', 'a@b', 'asdss234', 'CUSTOMER'); //
  }

  public fillCompany() {
    this.user = new  UserLogin(1, 'BBB', 'BBB@gmail.com', '1234bBBb', 'COMPANY'); //
  }

  public fillAdmin() {
    this.user = new  UserLogin(1, 'admin', 'admin@coupons', '12341234', 'ADMIN'); //
  }

}
