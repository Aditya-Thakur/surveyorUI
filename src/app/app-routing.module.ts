import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerSurveyComponent } from './components/answer-survey/answer-survey.component';
import { CheckResponsesComponent } from './components/check-responses/check-responses.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MySurveysComponent } from './components/my-surveys/my-surveys.component';
import { ThankYouComponent } from './components/shared/thank-you/thank-you.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'create', component: CreateSurveyComponent},
  {path : 'survey/:id', component: AnswerSurveyComponent},
  {path : 'login', component: LoginComponent},
  {path : 'response/:id', component: CheckResponsesComponent},
  {path: 'dashboard', component: MySurveysComponent},
  {path: 'thanks', component: ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
