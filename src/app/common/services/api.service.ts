import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credential, User } from '../interface/account';
import { TypedResponse } from '../interface/business-object';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://www.adresse.com/mv';

  constructor(private httpClient: HttpClient) { }

  // Function to perform GET request
  getData(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${endpoint}`);
  }

  private load<T>(URL: string, module: string, data: any): Observable<T> {
    let _headers = new HttpHeaders({
      'LocalAPI': `true`
    });
    // if (behavior === APIBehavior.SkipReviver) {
    //     if (localStorage.Token !== undefined && environment.useJWT) {
    //         _headers.append('SkipReviver', `true`);
    //     }
    // }
    return this.httpClient.post<T>(`${environment.API_URL}${module}/${URL}`, data, { headers: _headers }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error API: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  getCredential(credential: Credential): Observable<TypedResponse<User>> {
    //TODO check who  is better (I guess load)
    this.getData('');

    return this.load('getCredential', 'connect', credential);

    //exemple for get
    //return this.load(`GetQueueListItem?accountNumber=${accountNumber}`, 'Prospection', null)
  }
}
