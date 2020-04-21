import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from '../interfaces/company';
import { Vacancy } from '../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  }

  getVacancy(id): Observable<Vacancy>{
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}`);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${companyId}/vacancies`);
  }
}