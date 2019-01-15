import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/Models/company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public company: Company;
  public companyID: number;

  constructor(private companyServ: CompanyService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.companyID = parseInt(this.activatedRoute.snapshot.params.id, 10);
    const ob = this.companyServ.getCompanyByCompanyID(this.companyID);
    ob.subscribe(company => this.company = company);
  }

  update() {
    const ob = this.companyServ.updateCompany(this.company);
    ob.subscribe(data => {
      alert('Update Complete');
      this.router.navigate(['/profile']);
    });
  }

}
