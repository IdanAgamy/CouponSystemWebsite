import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Models/userLogger';
import { Customer } from 'src/app/Models/customer';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public user: UserLogin;
  public customers: Customer[];
  public userTypes = ['CUSTOMER', 'COMPANY'];
  public parameterTypes = ['name', 'email'];
  public userType: string;
  public parameterType: string;
  public searchParameter: string;

  constructor(private companyServ: CompanyService,
              private customerServ: CustomerService,
              private router: Router) { }

  ngOnInit() {
  }

  public search() {
    this.user = null;
    this.customers = null;
    switch (this.userType) {
      case 'CUSTOMER': switch (this.parameterType) {
        case 'name': this.getCustomerByName();
        break;
        case 'email': this.getCustomerByEmail();
        break;
      }
      break;
      case 'COMPANY':  switch (this.parameterType) {
        case 'name': this.getCompanyByName();
        break;
        case 'email': this.getCompanyByEmail();
        break;
      }
      break;
    }
  }

  public getCompanyByName() {
    const ob = this.companyServ.getCompanyByName(this.searchParameter);
    ob.subscribe(company => this.user = new UserLogin(
      company.companyId, company.companyName, company.companyEmail, company.companyPassword, 'COMPANY'));
  }
  public getCompanyByEmail() {
    const ob = this.companyServ.getCompanyByEmail(this.searchParameter);
    ob.subscribe(company => this.user = new UserLogin(
      company.companyId, company.companyName, company.companyEmail, company.companyPassword, 'COMPANY'));
  }

  public getCustomerByName() {
    const ob = this.customerServ.getCustomerByName(this.searchParameter);
    ob.subscribe(customers => this.customers = customers);
  }

  public getCustomerByEmail() {
    const ob = this.customerServ.getCustomerByEmail(this.searchParameter);
    ob.subscribe(customer => this.user = new UserLogin(
      customer.customerId, customer.customerName, customer.customerEmail, customer.customerPassword, 'CUSTOMER'));
  }

  public update(userID) {
    const num = parseInt(userID, 10);
    switch (this.userType) {
      case 'CUSTOMER': this.router.navigate(['/customers/update/' + userID]);
      break;
      case 'COMPANY': this.router.navigate(['/companies/update/' + userID]);
      break;
    }
  }

  public delete(userID: number) {
    let ob;
    switch (this.userType) {
      case 'CUSTOMER': ob = this.customerServ.deleteCustomer(userID);
      ob.subscribe();
      break;
      case 'COMPANY': ob = this.companyServ.deleteCompany(userID);
      ob.subscribe();
      break;
    }
  }

}
