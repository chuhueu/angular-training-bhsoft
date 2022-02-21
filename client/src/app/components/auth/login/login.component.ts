import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from '../../../models/login.model';
import { AuthService } from '../../../services/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //@ViewChild('f') loginForm: NgForm;
  public loginForm: FormGroup;
  public error = false;
  //returnUrl: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const loginModel = new LoginModel();
    this.loginForm = loginModel.createForm();
  }

  //   Not authenticated, send to login
  //   this.router.navigate(['/', 'login'], {queryParams: {return: state.url === '/dashboard' ? undefined : state.url}});
  // }
  onSubmit() {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (data) => {
          this.router.navigate(['/note']);
          localStorage.setItem('user', JSON.stringify(data));
        },
        (error) => {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
          console.log(error.message);
        }
      );
  }
}
