import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { question } from 'src/app/models/survey';

@Component({
  selector: 'app-add-question-bar',
  templateUrl: './add-question-bar.component.html',
  styleUrls: ['./add-question-bar.component.css']
})
export class AddQuestionBarComponent implements OnInit {

  @Input() questionType: string
  @Output() newQuestionEvent = new EventEmitter<any>();
  currentQuestion: string;
  constructor() { }

  ngOnInit() {
  }
  optionList = []

  addOption(newItem: string) {
    this.optionList.push(newItem);
  }

  addNewQuestion(value: string) {
    var newQuestion = {
      questionType: this.questionType,
      questionContent: value,
      optionList: this.optionList
    }
    this.newQuestionEvent.emit(newQuestion);
    this.currentQuestion = "";
    this.optionList = [];
  }

}
