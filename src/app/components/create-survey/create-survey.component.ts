import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { question, Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/services/survey.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  questionTypes = environment.questionCategories;
  selected2 = this.questionTypes[0];
  lastDate: Date;
  constructor(private surveyService: SurveyService, private router: Router) { }
  questionList : question[]  = [];
  ngOnInit() {
  }

  compareFn(f1, f2): boolean {
    return f1 && f2? f1 === f2 : f1 === f2;
  }

  addQuestion(q: question) {
    this.questionList.push(q);
  }

  uploadForm() {
    var newSurvey = {
      createdBy : environment.currentUser.email,
      createdOn : new Date(),
      validTill : this.lastDate,
      active : true,
      question : this.questionList
    };
    this.surveyService.uploadSurvey(newSurvey).then(
      res => {
        console.log(res);
        this.router.navigateByUrl('/dashboard')
      }
    );
  }

}
