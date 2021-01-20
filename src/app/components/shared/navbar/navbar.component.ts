import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = environment.currentUser;
  constructor(private router: Router) { }

  ngOnInit() {
    this.setUser();
  }
  setUser() {
    this.user = environment.currentUser;
  }
  logout() {
    environment.currentUser = {
      id: '',
      fullName : '',
      email : '',
      gender : '',
      dob : new Date(),
      mobileNumber : ''
    }
    this.setUser();
    this.router.navigateByUrl('/login');
  }

}
