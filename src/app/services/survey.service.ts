import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  submitResponse(data): Observable<any> {
    console.log(data);    
    return this.http.post(environment.backendUrl + `response/addResponse`, data) as Observable<any>;
  }

  fetchMySurveys(data): Observable<any> {
    return this.http.post(environment.backendUrl + `survey/fetchMySurveys`, data) as Observable<any>;
  }

  fetchThisSurvey(id): Observable<any> {
    return this.http.get(environment.backendUrl + `survey/getSurvey`+id) as Observable<any>;
  }

  fetchAllResponse(id): Observable<any> {
    return this.http.get(environment.backendUrl + `response/fetchResponses`+id) as Observable<any>;
  }

  uploadSurvey(data) {
    return this.http.post(environment.backendUrl + `survey/createSurvey`, data).toPromise()
    .then( res => {
      console.log(res);
      return res as {
        status: 0,
        message: '',
        surveyCode: ''
      };
    })
    .catch(err => this.handleError(err));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
