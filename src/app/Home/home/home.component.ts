import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'Coupons Coupons Coupons!';
  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  public UserLogin() {
    // tslint:disable-next-line:prefer-const
    let user = new  UserLogin(1, 'patric', 'a@b', 'asdf1234', 'CUSTOMER');
    // tslint:disable-next-line:prefer-const
    let ob = this.service;
    // tslint:disable-next-line:prefer-const
    let user2 = ob.login(user);
    alert(JSON.stringify(user2));
  }

}
