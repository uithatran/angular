import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUri: string = 'http://localhost:3000/api';
  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private httpClient: HttpClient,
    // private httpHeaders: HttpHeaders,
  ) { }

  // Get all Users
  getUsers() {
    let url = `${this.baseUri}/users`;
    return this.httpClient.get(url);
  }

  // Create User
  createUser(data): Observable<any> {
    console.log("data BE: " + data);
    let url = `${this.baseUri}/users/create`;
    return this.httpClient.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
