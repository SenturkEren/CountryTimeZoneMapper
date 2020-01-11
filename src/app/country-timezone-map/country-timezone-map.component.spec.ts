import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTimezoneMapComponent } from './country-timezone-map.component';

describe('CountryTimezoneMapComponent', () => {
  let component: CountryTimezoneMapComponent;
  let fixture: ComponentFixture<CountryTimezoneMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTimezoneMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTimezoneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
