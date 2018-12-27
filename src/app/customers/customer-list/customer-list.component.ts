import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[];

  constructor(private customerServ: CustomerService) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let ob = this.customerServ.getAllCustomers();
    ob.subscribe(comps => this.customers = comps);
  }

}
