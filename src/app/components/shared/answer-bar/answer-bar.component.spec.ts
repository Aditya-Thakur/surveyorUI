import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerBarComponent } from './answer-bar.component';

describe('AnswerBarComponent', () => {
  let component: AnswerBarComponent;
  let fixture: ComponentFixture<AnswerBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
