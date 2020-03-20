import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionNewsListComponent } from './fashion-news-list.component';

describe('FashionNewsListComponent', () => {
  let component: FashionNewsListComponent;
  let fixture: ComponentFixture<FashionNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
