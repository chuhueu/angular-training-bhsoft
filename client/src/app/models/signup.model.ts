import { FormControl, FormGroup, Validators } from '@angular/forms';

export class SignupModel {
  public username: string;
  public email: string;
  public password: string;

  public createForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
