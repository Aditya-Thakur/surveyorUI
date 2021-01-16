import { Component, Input, OnInit } from '@angular/core';
import { question } from 'src/app/models/survey';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-question-bar',
  templateUrl: './question-bar.component.html',
  styleUrls: ['./question-bar.component.css']
})
export class QuestionBarComponent implements OnInit {

  @Input() question: question;
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;

  constructor() { }

  ngOnInit() {
  }
    onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

} 
