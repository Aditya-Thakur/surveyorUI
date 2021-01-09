import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckResponsesComponent } from './check-responses.component';

describe('CheckResponsesComponent', () => {
  let component: CheckResponsesComponent;
  let fixture: ComponentFixture<CheckResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
