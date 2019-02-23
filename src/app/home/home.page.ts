import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  password: string;
  invalidCredentials: string;

  constructor( private localStorage: AuthServiceService, private router: Router ) {

    this.invalidCredentials = null;
  }

  goLogin() {
    this.invalidCredentials = null;

      if ( this.localStorage.CheckUserCredentials(this.username, this.password)) {
        this.router.navigate(['/main']);
      } else {
        this.invalidCredentials = 'Invalid Login Credentials';
      }
  }

  goRegister() {
    this.router.navigateByUrl('/register');
  }
}
