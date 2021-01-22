import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/app/models/response';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/services/survey.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-check-responses',
  templateUrl: './check-responses.component.html',
  styleUrls: ['./check-responses.component.css']
})
export class CheckResponsesComponent implements OnInit {

  id: string;
  verified: boolean = false;
  survey: Survey;
  responseList: Response[];
  displayedColumns: string[] = [];
  responseDatasource = [];
  dataSource;
  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (environment.currentUser.email != '') {
      this.surveyService.fetchThisSurvey(this.id).subscribe(
        res => {
          this.survey = res;
          if (environment.currentUser.email == this.survey.createdBy) {
            this.verified = true
          }
          for (var question of this.survey.question) {
            this.displayedColumns.push(question.questionContent);
          }
          if (this.verified) {
            this.surveyService.fetchAllResponse(this.id).subscribe(
              res => {
                this.responseList = res;
                for (var response of this.responseList) {
                  var obj = {};
                  var count = 0;
                  for (var answer of response.answer) {
                    obj[this.displayedColumns[count]] = answer.userResponse + JSON.stringify(answer.optionList)
                    count++;
                  }
                  this.responseDatasource.push(obj);
                  obj = {};
                }
                this.dataSource = this.responseDatasource;
                console.log(this.responseDatasource);
              }
            );
          }
        }
      );
    }
  }
}
