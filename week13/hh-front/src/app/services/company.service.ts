import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Company, LoginResponse} from "../interfaces/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }

  getCompany(id: number): Observable<Company>{
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}`);
  }

  login(username, password): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }
}