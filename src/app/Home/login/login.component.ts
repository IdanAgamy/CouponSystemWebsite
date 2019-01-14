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


  public msg: string;
  public user: UserLogin = new  UserLogin(); // 1, 'patric', 'a@b', 'asdss234', 'CUSTOMER'
  constructor(private authenticationServ: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  // public UserGoodLogin() {
  //   // tslint:disable-next-line:prefer-const
  //   let user = new  UserLogin(1, 'patric', 'a@b', 'asdss234', 'CUSTOMER');
  //   // tslint:disable-next-line:prefer-const
  //   this.newMethod(user);
  // }

  // public UserBadLogin() {
  //   // tslint:disable-next-line:prefer-const
  //   let user = new  UserLogin(1, 'patric', 'a@b', 'asdf1234', 'CUSTOMER');
  //   this.newMethod(user);
  // }


  public login() {
    // this.user.userID = 1;
    // tslint:disable-next-line:prefer-const
    let ob = this.authenticationServ.login(this.user);
    // tslint:disable-next-line:prefer-const
    ob.subscribe(data => {
      this.router.navigate(['/home']);
    },
    error => {
      alert(JSON.stringify(error));
      if (error.status === 401) {
        this.msg = 'wrong user name or password';
      } else {
        this.msg = 'something wrong with server';
    }
    });
  }

  public fillCustomer() {
    this.user = new  UserLogin(1, 'patric', 'a@b', 'asdss234', 'CUSTOMER'); //
  }

  public fillCompany() {
    this.user = new  UserLogin(1, 'BBB', 'BBB@gmail.com', '1234bBBb', 'COMPANY'); //
  }

  public fillAdmin() {
    this.user = new  UserLogin(1, 'admin', 'admin@coupons', '1234', 'ADMIN'); //
  }

}
