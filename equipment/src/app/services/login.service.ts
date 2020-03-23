import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JwtResponse } from './jwt-responsive';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUri: string = 'http://localhost:3000/api/auth';
  authSubject  =  new  BehaviorSubject(false);
  constructor(
    private httpClient: HttpClient,
  ) { }

  loginPost(data): Observable<any> {
    let url = `${this.baseUri}/login`;
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
