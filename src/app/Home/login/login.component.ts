import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public testUser: UserLogin;
  public msg: string;
  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  public UserGoodLogin() {
    // tslint:disable-next-line:prefer-const
    let user = new  UserLogin(1, 'patric', 'a@b', 'asdss234', 'CUSTOMER');
    // tslint:disable-next-line:prefer-const
    this.newMethod(user);
  }

  public UserBadLogin() {
    // tslint:disable-next-line:prefer-const
    let user = new  UserLogin(1, 'patric', 'a@b', 'asdf1234', 'CUSTOMER');
    this.newMethod(user);
  }


  private newMethod(user: UserLogin) {
    // tslint:disable-next-line:prefer-const
    let ob = this.service.login(user);
    // tslint:disable-next-line:prefer-const
    ob.subscribe(u => {
      this.testUser = u;
      this.msg = null;
    },
    error => {
      this.testUser = null;
      if (error.status === 401) {
        this.msg = 'wrong user name or password';
      } else {
        this.msg = 'something wrong with server';
    }
    });
  }

}
