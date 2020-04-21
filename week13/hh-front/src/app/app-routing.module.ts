import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompaniesListComponent} from 'src/app/lists/companies-list/companies-list.component';
import {CompanyPageComponent} from 'src/app/pages/company-page/company-page.component';
import { VacanciesListComponent } from 'src/app/lists/vacancies-list/vacancies-list.component';
import { VacancyPageComponent } from 'src/app/pages/vacancy_page/vacancy_page.component';
import {VacanciesCompanyComponent} from 'src/app/lists/vacancies-company/vacancies-company.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'api/companies'},
  { path: 'api/companies', component: CompaniesListComponent},
  { path: 'api/vacancies', component: VacanciesListComponent},
  { path: 'api/vacancies/:vacancyId', component: VacancyPageComponent},
  { path: 'api/companies/:companyId/vacancies', component: VacanciesCompanyComponent},
  { path: 'api/companies/:companyId', component: CompanyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }