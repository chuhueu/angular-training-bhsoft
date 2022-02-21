import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NoteService } from '../../../services/note.service';
import { NoteModel } from '../../../models/note.model';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
})
export class NoteAddComponent implements OnInit {
  //@ViewChild('f') addForm: NgForm;
  public addForm: FormGroup;
  model: NgbDateStruct;
  addSuccess = false;
  date = '';
  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {
    const addNoteModel = new NoteModel();
    this.addForm = addNoteModel.createForm();
  }
  onSubmit() {
    this.addSuccess = true;
    setTimeout(() => {
      this.addSuccess = false;
    }, 2000);
    this.date =
      this.addForm.value.date.day +
      '/' +
      this.addForm.value.date.month +
      '/' +
      this.addForm.value.date.year;
    this.noteService.addNote(
      this.addForm.value.title,
      this.addForm.value.description,
      this.date
    );
    this.addForm.reset();
  }
  onHandleBack() {
    this.router.navigate(['/']);
  }
}
