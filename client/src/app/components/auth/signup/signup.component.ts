import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  isError = false;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    //console.log(this.signupForm);
    this.authService
      .register(
        this.signupForm.value.username,
        this.signupForm.value.email,
        this.signupForm.value.password
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.route.navigate(['/auth/login']);
        },
        (error) => {
          console.log(error);
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
          }, 2000);
        }
      );
  }
}
