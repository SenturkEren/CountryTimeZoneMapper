import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTimezoneTableComponent } from './country-timezone-table.component';

describe('CountryTimezoneTableComponent', () => {
  let component: CountryTimezoneTableComponent;
  let fixture: ComponentFixture<CountryTimezoneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTimezoneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTimezoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
