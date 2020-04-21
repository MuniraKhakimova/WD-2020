import { Component, OnInit } from '@angular/core';
import {VacancyService} from 'src/app/services/vacancy.service';
import {Vacancy} from 'src/app/interfaces/vacancy';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(){
    this.vacancyService.getVacancies().subscribe(vacancies=>{
      this.vacancies = vacancies
    });
  }

}