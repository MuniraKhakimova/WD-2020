import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VacancyService} from 'src/app/services/vacancy.service';
import {Vacancy} from 'src/app/interfaces/vacancy';

@Component({
  selector: 'app-vacancy_page',
  templateUrl: './vacancy_page.component.html',
  styleUrls: ['./vacancy_page.component.css']
})
export class VacancyPageComponent implements OnInit {
  vacancy: Vacancy;

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancy();
  }

  getVacancy(){
    const id = +this.route.snapshot.paramMap.get('vacancyId');
    
    this.vacancyService.getVacancy(id).subscribe(vacancy=>this.vacancy=vacancy);
  }

}