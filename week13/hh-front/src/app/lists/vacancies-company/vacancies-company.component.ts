import {Component, OnInit} from '@angular/core';
import {Vacancy} from 'src/app/interfaces/vacancy';
import {VacancyService} from 'src/app/services/vacancy.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vacancies-company',
  templateUrl: './vacancies-company.component.html',
  styleUrls: ['./vacancies-company.component.css']
})
export class VacanciesCompanyComponent implements OnInit {
  vacancies: Vacancy[];

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const companyId = +this.route.snapshot.paramMap.get('companyId');
    this.getVacancies(companyId);
  }

  getVacancies(companyId: number) {
    this.vacancyService.getCompanyVacancies(companyId).subscribe(vacancies => this.vacancies = vacancies);
  }

}