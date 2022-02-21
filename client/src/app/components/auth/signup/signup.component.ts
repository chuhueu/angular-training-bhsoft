import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SignupModel } from '../../../models/signup.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  //@ViewChild('f') signupForm: NgForm;
  public signupForm: FormGroup;
  isError = false;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    const signupModel = new SignupModel();
    this.signupForm = signupModel.createForm();
  }
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
