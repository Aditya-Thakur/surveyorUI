import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { question } from 'src/app/models/survey';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-answer-bar',
  templateUrl: './answer-bar.component.html',
  styleUrls: ['./answer-bar.component.css']
})
export class AnswerBarComponent implements OnInit {

  @Input() question: question;
  @Output() newAnswerEvent = new EventEmitter<any>();
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  constructor() { }

  optionList = [];
  selected;

  ngOnInit() {
  }
    onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
    var newAnswer = {
      questionId : this.question._id,
      userResponse : rating,
      questionType: this.question.questionType,
      optionList: this.optionList
    }
    this.newAnswerEvent.emit(newAnswer);
  }

  checkboxClicked(x, y) {
    const index = this.optionList.indexOf(y);
    if (index !== -1) {
      console.log('removing ',y);
       this.optionList.splice(index, 1);
    }
    else {
      console.log('adding ',y);
      
       this.optionList.push(y)
    };
    var newAnswer = {
      questionId : this.question._id,
      userResponse : "",
      questionType: this.question.questionType,
      optionList: this.optionList
    }
    this.newAnswerEvent.emit(newAnswer);
  }

  radioChange(option) {
    this.optionList = [];
    this.optionList.push(option);
    var newAnswer = {
      questionId : this.question._id,
      userResponse : "",
      questionType: this.question.questionType,
      optionList: this.optionList
    }
    this.newAnswerEvent.emit(newAnswer);
    this.optionList = [];   
  }

  addNewResponse(value: string) {
    var newAnswer = {
      questionId : this.question._id,
      userResponse : value,
      questionType: this.question.questionType,
      optionList: this.optionList
    }
    this.newAnswerEvent.emit(newAnswer);
    this.optionList = [];
  }

} 
