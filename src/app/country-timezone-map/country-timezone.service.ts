import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Country } from './dto/Country';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryTimezoneService {

  constructor(private http: HttpClient) { }

  // Define API
  apiURL = 'http://localhost:8080';

  // HttpClient API get() method => Fetch country list
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiURL + '/countries')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  setCountryDefaultTimeZone(country: Country) {
    return this.http.put(this.apiURL + '/countries', country, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
