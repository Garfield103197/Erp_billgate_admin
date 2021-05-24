import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorLogin: any;
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthenticationService,
    private loaderService: LoaderService
  ) { }

  data = {
    type: {
      phone: 'phone',
      password: 'password',
    },
  };
  ngOnInit(): void { }

  login(ev) {
    this.loaderService.show();
    this.authService
      .login(ev.username,ev.password).subscribe((res) => {
          this.localStorage.set('access_token', res);
          this.router.navigate(['/main/member']);
          this.loaderService.hide();
        },
        (err) => {
          this.errorLogin = err.error.message;
        }
      );
  }
  routeTo(e) {
    console.log(e);
  }
}
