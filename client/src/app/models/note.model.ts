import { FormControl, FormGroup, Validators } from '@angular/forms';

export class NoteModel {
  public title: string;
  public description: string;
  public date: {
    year: string;
    month: string;
    day: string;
  };

  public createForm(): FormGroup {
    return new FormGroup({
      title: new FormControl(this.title, [Validators.required]),
      description: new FormControl(this.description, [Validators.required]),
      date: new FormControl(this.date, [Validators.required]),
    });
  }
}
