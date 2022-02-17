import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteService, Table } from '../../../services/note.service';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css'],
})
export class NoteEditComponent implements OnInit {
  @ViewChild('f') saveForm: NgForm;
  model: NgbDateStruct;
  index: number;
  saveSuccess = false;
  titleValue = '';
  descValue = '';
  date = '';
  data: Table[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService
  ) {
    this.data = this.noteService.tableNote;
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.titleValue = this.data[0].values[this.index];
    this.descValue = this.data[1].values[this.index];
  }
  onSubmit() {
    this.saveSuccess = true;
    setTimeout(() => {
      this.saveSuccess = false;
    }, 2000);
    this.date = this.model.day + '/' + this.model.month + '/' + this.model.year;
    this.noteService.updateNote(
      this.index,
      this.titleValue,
      this.descValue,
      this.date
    );
    this.saveForm.reset();
  }
  onHandleBack() {
    this.router.navigate(['/']);
  }
}
