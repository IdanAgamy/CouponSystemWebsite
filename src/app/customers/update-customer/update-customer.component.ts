import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public customer: Customer;
  public customerID: number;

  constructor(private customerServ: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.customerID = parseInt(this.activatedRoute.snapshot.params.id, 10);
    const ob = this.customerServ.getCustomerIDByCustomerID(this.customerID);
    ob.subscribe(customer => this.customer = customer);
  }

  update() {
    const ob = this.customerServ.updateCustomer(this.customer);
    ob.subscribe(data => {
      this.router.navigate(['/profile']);
    });
  }

}
