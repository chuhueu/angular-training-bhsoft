import { FormControl, FormGroup, Validators } from '@angular/forms';

export class LoginModel {
  public email: string;
  public password: string;

  public createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }
}
