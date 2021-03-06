import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company'
import { CompanyService } from 'src/app/services/company.service'

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies
    });
  }
}
