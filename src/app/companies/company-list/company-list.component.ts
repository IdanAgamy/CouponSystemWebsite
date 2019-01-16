import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/Models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  public companies: Company[];

  constructor(private companyServ: CompanyService) { }

  ngOnInit() {
    const ob = this.companyServ.getAllCompanies();
    ob.subscribe(comps => this.companies = comps);
  }

}
