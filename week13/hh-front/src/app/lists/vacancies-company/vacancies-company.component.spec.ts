import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesCompanyComponent } from './vacancies-company.component';

describe('VacanciesCompanyComponent', () => {
  let component: VacanciesCompanyComponent;
  let fixture: ComponentFixture<VacanciesCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanciesCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciesCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
