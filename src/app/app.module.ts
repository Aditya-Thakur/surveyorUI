import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { LoginComponent } from './components/login/login.component';
import { MySurveysComponent } from './components/my-surveys/my-surveys.component';
import { AnswerSurveyComponent } from './components/answer-survey/answer-survey.component';
import { HomeComponent } from './components/home/home.component';
import { CheckResponsesComponent } from './components/check-responses/check-responses.component';
import { MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateSurveyComponent,
    LoginComponent,
    MySurveysComponent,
    AnswerSurveyComponent,
    HomeComponent,
    CheckResponsesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
