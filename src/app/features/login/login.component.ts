import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';
import {TokenStorage} from '../../core/services/auth/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSubmitted = false;
  isError = false;

  username = new FormControl('', [
    Validators.required
  ]);

  password = new FormControl('', [
    Validators.required
  ]);

  constructor(private router: Router,
              private authService: AuthService,
              private token: TokenStorage) {
  }

  ngOnInit() {
  }

  login() {
    if (!this.validate()) {
      this.isSubmitted = true;
      return;
    }

    this.authService.authenticate(this.username.value, this.password.value)
      .subscribe(
        data => {
          this.token.saveToken(data.token);
          this.isError = true;
          this.router.navigate([this.authService.landingPage]);
        },
        error => {
          console.log(error);
          this.isError = true;
        }
      );
  }

  validate(): boolean {
    return !(this.username.invalid || this.password.invalid);
  }
}
