import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { answer } from 'src/app/models/response';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.css']
})
export class AnswerSurveyComponent implements OnInit {
  survey;
  id;
  constructor(private route: ActivatedRoute, private surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.surveyService.fetchThisSurvey(this.id).subscribe(
      res => {
        if(res.status) {
          console.log(res);          
        } else {
        this.survey = res;
      }
      }
    )
  }

  responseList: answer[] = [];

  checkInclude(answerList: answer[], answer) {
   for(var i=0; i< answerList.length;i++)
    {
      if(answerList[i].questionId == answer.questionId)
        return i;
    }
    return -1;
  }

  addAnswer(a: answer) {
    var index = this.checkInclude(this.responseList, a);
      if(index == -1) {
        this.responseList.push(a);
      } else {
        this.responseList.slice(index);
      }
  }

  uploadResponse() {
    var newSurvey = {
      surveyId : this.id,
      submittedOn : new Date(),
      answer: this.responseList
    };
    this.surveyService.submitResponse(newSurvey).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/thanks')
      }
    );0
  }

}
