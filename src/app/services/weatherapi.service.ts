import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CurrentWeather } from '../models/current-weather';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  // API path
  base_path = 'http://api.weatherapi.com/v1/current.json?key=c9121f0b23bb4a94ba2154408200312&q=Kolkata';

  base_forecast = 'http://api.weatherapi.com/v1/forecast.json?key=c9121f0b23bb4a94ba2154408200312&q=Kolkata&days=3';

  
  constructor(private http: HttpClient) { }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };



    // Get Current Weather info
    getList(): Observable<[]> {
      return this.http
        .get<[]>(this.base_path)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    // Get upcoming Weather Forecast
    getForecast(): Observable<CurrentWeather> {
      return this.http
        .get<CurrentWeather>(this.base_forecast)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
    

  
}
