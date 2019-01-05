import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AuthenticationComponent implements OnInit {


  public msg: string;
  public user: UserLogin = new  UserLogin(); // 1, 'patric', 'a@b', 'asdss234', 'CUSTOMER'
  constructor(private service: LoginService,
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
    // tslint:disable-next-line:prefer-const
    let ob = this.service.login(this.user);
    // tslint:disable-next-line:prefer-const
    ob.subscribe(u => {
      this.msg = null;
      localStorage.setItem('user', JSON.stringify(u));
      localStorage.setItem('loggedin', 'true');
      this.router.navigate(['/home']);
    },
    error => {
      if (error.status === 401) {
        this.msg = 'wrong user name or password';
      } else {
        this.msg = 'something wrong with server';
    }
    });
  }

  public fillUser() {
    this.user = new  UserLogin(1, 'patric', 'a@b', 'asdss234', 'CUSTOMER'); //
  }

}
