import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyPageComponent } from './pages/company_page/company_page.component';
import { CompaniesListComponent } from './lists/companies-list/companies-list.component';
import { VacanciesListComponent } from './lists/vacancies-list/vacancies-list.component';
import { VacanciesCompanyComponent } from './lists/vacancies-company/vacancies-company.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyPageComponent,
    CompaniesListComponent,
    VacanciesListComponent,
    VacanciesCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
