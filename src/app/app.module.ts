import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { LoginComponent } from './components/login/login.component';
import { MySurveysComponent } from './components/my-surveys/my-surveys.component';
import { AnswerSurveyComponent } from './components/answer-survey/answer-survey.component';
import { HomeComponent } from './components/home/home.component';
import { CheckResponsesComponent } from './components/check-responses/check-responses.component';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatTabsModule, MatTooltip, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { QuestionBarComponent } from './components/shared/question-bar/question-bar.component';
import { AddQuestionBarComponent } from './components/shared/add-question-bar/add-question-bar.component';
import { AddOptionBarComponent } from './components/shared/add-option-bar/add-option-bar.component';
import { StarRatingComponent } from './components/shared/star-rating/star-rating.component';
import { AnswerBarComponent } from './components/shared/answer-bar/answer-bar.component';
import { LostComponent } from './components/shared/lost/lost.component';
import { ErrorComponent } from './components/shared/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateSurveyComponent,
    LoginComponent,
    MySurveysComponent,
    AnswerSurveyComponent,
    HomeComponent,
    CheckResponsesComponent,
    NavbarComponent,
    FooterComponent,
    QuestionBarComponent,
    AddQuestionBarComponent,
    AddOptionBarComponent,
    StarRatingComponent,
    AnswerBarComponent,
    LostComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    MatDividerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
