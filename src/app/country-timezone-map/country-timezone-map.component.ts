import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { CountryTimezoneService } from './country-timezone.service';
import { Country } from './dto/Country';
import { TimeZone } from './dto/TimeZone';
import { MatAutocompleteSelectedEvent, MatTableDataSource } from '@angular/material';
import { LookUp } from './dto/LookUp';



@Component({
  selector: 'app-country-timezone-map',
  templateUrl: './country-timezone-map.component.html',
  styleUrls: ['./country-timezone-map.component.css']
})
export class CountryTimezoneMapComponent implements OnInit {

  countryControl = new FormControl();
  timeZoneControl = new FormControl();
  displayedColumns = ['Name', 'Default Time Zone'];

  countries: Country[] = [];
  timeZones: LookUp[];

  filteredOptions: Observable<Country[]>;
  selectedCountry : Country;
  selectedTimeZone : LookUp;
  
  dataSource: MatTableDataSource<Country>;

  constructor(private ref: ChangeDetectorRef,private _formBuilder: FormBuilder,  public service: CountryTimezoneService) {}

  ngOnInit() {

    this.selectedTimeZone = null;
    this.selectedCountry = null;
    this.service.getCountries().subscribe
    (
      (response)=>
      {
        this.dataSource = new MatTableDataSource(response);
        this.countries = response;
        this.ref.detectChanges();
        this.filteredOptions = this.countryControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.countryName),
          map(countryName => countryName ? this._filter(countryName) : this.countries.slice())
        );
   
      },
      (error) => console.log(error)
    )
  }

  displayCountry(country?: Country): string | undefined {
    return country ? country.countryName : undefined;
  }

  private _filter(name: string): Country[] {
    const filterValue = name.toLowerCase();
    return this.countries.filter(option => option.countryName.toLowerCase().indexOf(filterValue) === 0);
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.selectedCountry = event.option.value;
    this.timeZones = this.selectedCountry.timeZones;
  }

  onSelectionTimeZoneChanged(event: MatAutocompleteSelectedEvent) {
    this.selectedTimeZone = event.option.value;    
  }
  public displayProperty(property) {
    if (property) {
      return property.value;
    }
  }

  selectTimeZoneClicked (){

    if(this.selectedCountry == null){
      window.alert('Please select country!');
      return;
    }
    
    if(this.selectedTimeZone == null){
      window.alert('Please select timezone');
      return;
  }

    this.selectedCountry.defaultTimezone = this.selectedTimeZone;
    this.service.setCountryDefaultTimeZone(this.selectedCountry).subscribe (
      (response)=>
      {
        window.alert('Success!');
        console.log(JSON.stringify(response));
      })
      this.selectedTimeZone = null;
  }

}
