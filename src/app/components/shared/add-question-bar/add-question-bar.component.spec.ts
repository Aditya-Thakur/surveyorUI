import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionBarComponent } from './add-question-bar.component';

describe('AddQuestionBarComponent', () => {
  let component: AddQuestionBarComponent;
  let fixture: ComponentFixture<AddQuestionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
