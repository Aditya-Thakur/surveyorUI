import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-option-bar',
  templateUrl: './add-option-bar.component.html',
  styleUrls: ['./add-option-bar.component.css']
})
export class AddOptionBarComponent implements OnInit {

  @Input()
  questionType: string
  currentOption: string;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.currentOption = "";
  }


}
