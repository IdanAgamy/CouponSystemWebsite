import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { CustomerService } from 'src/app/services/customer.service';
import { CompanyService } from 'src/app/services/company.service';
import { Customer } from 'src/app/Models/customer';
import { Company } from 'src/app/Models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: UserLogin;
  constructor(private customerServ: CustomerService,
              private companyServ: CompanyService,
              private router: Router) { }

  ngOnInit() {
    this.user = new UserLogin();
    this.user.userType = 'COMPANY';
  }

  public register() {
    if (this.user.userType === 'CUSTOMER') {
      this.customerRegister();
    } else {
      this.companyRegister();
    }
  }

  private customerRegister() {
    // tslint:disable-next-line:prefer-const
    let customer = new Customer();
    customer.customerName = this.user.name;
    customer.customerEmail = this.user.email;
    customer.customerPassword = this.user.password;
    // tslint:disable-next-line:prefer-const
    let ob = this.customerServ.creatCustomer(customer);
    ob.subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

  private companyRegister() {
    const company = new Company();
    company.companyName = this.user.name;
    company.companyEmail = this.user.email;
    company.companyPassword = this.user.password;
    const ob = this.companyServ.creatCompany(company);
    ob.subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

  private successRegister(u: any) {
    this.router.navigate(['/home']);
  }

}
