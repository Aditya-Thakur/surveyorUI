import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.css']
})
export class AnswerSurveyComponent implements OnInit {
  survey;
  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.surveyService.fetchThisSurvey(id).subscribe(
      res => {
        this.survey = res;
      }
    )
  }

}
