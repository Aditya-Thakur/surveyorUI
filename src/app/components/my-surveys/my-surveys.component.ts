import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/services/survey.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-surveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.css']
})
export class MySurveysComponent implements OnInit {

  surveyList = [];
  user = environment.currentUser;
  constructor(private surveyService: SurveyService, private router:Router) { }

  ngOnInit() {
    this.surveyService.fetchMySurveys({ "createdBy": environment.currentUser.email}).subscribe(
      res => {
          console.log(res);          
          this.surveyList = res;
      }
    )
  }

  share(id: string) {
    var mailSubject = "Sharing survey by " + this.user.fullName;
    var body = 'Dear Sir/Madam, %0D%0A I am delighted to share this survey with you. Please take out some time to fill. %0D%0A'
    + 'link - ' + environment.frontEndUrl + 'survey/' + id 
    +'%0D%0A Warm Regards %0D%0A' 
    + this.user.fullName; 
    var url = 'mailto:?subject='+mailSubject+'&body='+body;
    window.open(url, "_blank");
    // window.open("mailto:veron@gmail.com?subject=hello&body=fggf", '_blank')
  }

  checkResponse(id: string) {
    this.router.navigateByUrl('response/'+id);
  }

}
