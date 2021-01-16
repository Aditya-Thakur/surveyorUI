import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionBarComponent } from './add-option-bar.component';

describe('AddOptionBarComponent', () => {
  let component: AddOptionBarComponent;
  let fixture: ComponentFixture<AddOptionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOptionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
