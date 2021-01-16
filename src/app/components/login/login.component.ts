import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLoginForm;
  showRegisterForm;
  error;
  userMessage;
  loginForm;
  registerForm;
  constructor(private userService: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._]+@[a-z]+.com|.co.in')
      ]
      ),
      password: new FormControl('', [
        Validators.required
      ])
    });
    this.registerForm = new FormGroup({
      fullName: new FormControl ('', [Validators.required]),
      gender: new FormControl ('', []),
      dob: new FormControl ('', [Validators.required]),
      mobileNumber: new FormControl ('', [Validators.required]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('[a-z0-9._]+@[a-z]+.com|.co.in')
      ]),
      password: new FormControl('', [Validators.required]),
     })
  }

  ngOnInit() {
    this.activateLogin();
    console.log('onInit',this.showLoginForm);
   
  }

  activateRegister() {
    this.showLoginForm = false;
    this.showRegisterForm  = true;
    console.log('activateRegister',this.showLoginForm);
  }
  activateLogin() {
    this.showLoginForm = true;
    this.showRegisterForm = false;
    console.log('activateLogin',this.showLoginForm);
  }

  login() {
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        environment.currentUser.fullName = res.fullName;
        environment.currentUser.email = res.email;
        environment.currentUser.gender = res.gender;
        environment.currentUser.dob = res.dob;
        environment.currentUser.mobileNumber = res.mobileNumber;
        this.router.navigateByUrl('/dashboard');
      }

    )
  }

  register() {
console.log(this.registerForm.value);
this.userService.register(this.registerForm.value).then(
  res => {
// if(res.status == 200) {
// this.userMessage = res.message;
// }
console.log(res);
window.location.reload();
  }
);
  }

}
