import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/services/survey.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-surveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.css']
})
export class MySurveysComponent implements OnInit {

  surveyList = [];
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.fetchMySurveys({ "createdBy": environment.currentUser.email}).subscribe(
      res => {
          console.log(res);          
          this.surveyList = res;
      }
    )
  }

}
