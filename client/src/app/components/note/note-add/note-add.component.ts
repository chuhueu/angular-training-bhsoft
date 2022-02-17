import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NoteService } from '../../../services/note.service';
@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
})
export class NoteAddComponent implements OnInit {
  @ViewChild('f') addForm: NgForm;
  model: NgbDateStruct;
  addSuccess = false;
  date = '';
  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.addSuccess = true;
    setTimeout(() => {
      this.addSuccess = false;
    }, 2000);
    this.date = this.model.day + '/' + this.model.month + '/' + this.model.year;
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
