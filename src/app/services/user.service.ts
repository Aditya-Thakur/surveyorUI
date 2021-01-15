import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(data) {
    return this.http.post(environment.backendUrl + `user/register`, data).toPromise()
    .then( res => {
      console.log(res);
      return res as {
        status: 0,
        message: ''
      };
    })
    .catch(err => this.handleError(err));
  }
  login(data) {
    return this.http.post(environment.backendUrl + `user/login`, data).toPromise()
    .then( res => {
      console.log(res);
      return res as User;
    })
    .catch(err => this.handleError(err));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
