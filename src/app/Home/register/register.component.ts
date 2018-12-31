import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { CustomerService } from 'src/app/services/customer.service';
import { CompanyService } from 'src/app/services/company.service';
import { Customer } from 'src/app/Models/customer';
import { Company } from 'src/app/Models/company';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: UserLogin = new UserLogin();
  constructor(private customerServ: CustomerService,
              private companyServ: CompanyService) { }

  ngOnInit() {
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
    ob.subscribe(u => this.successRegister(u));
  }

  private companyRegister() {
    // tslint:disable-next-line:prefer-const
    let company = new Company();
    company.companyName = this.user.name;
    company.companyEmail = this.user.email;
    company.companyPassword = this.user.password;
    // tslint:disable-next-line:prefer-const
    let ob = this.companyServ.creatCompany(company);
    ob.subscribe(u => this.successRegister(u));
  }

  private successRegister(u: any) {
    alert(JSON.stringify(u));
  }

}
