import { Component } from '@angular/core';
import { NoteService } from './services/note.service';
import { Table } from './services/note.service';
// const tableNote = JSON.parse(localStorage.getItem('tables')!) || [
//   {
//     title: 'Title',
//     values: ['aaa', 'bbb'],
//   },
//   {
//     title: 'Description',
//     values: ['ccc', 'ddd'],
//   },
//   {
//     title: 'Date',
//     values: ['10/02/2000', '14/09/2000'],
//   },
// ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private noteService: NoteService) {}
  title = 'task-note-route';
}
