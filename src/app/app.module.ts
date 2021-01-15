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
import { MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

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
    FooterComponent
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
