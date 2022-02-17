import { Injectable } from '@angular/core';

export interface Table {
  title: string;
  values: Array<string>;
}
@Injectable({
  providedIn: 'root',
})
export class NoteService {
  tableNote: Table[] = JSON.parse(localStorage.getItem('tables')!) || [
    {
      title: 'Title',
      values: [],
    },
    {
      title: 'Description',
      values: [],
    },
    {
      title: 'Date',
      values: [],
    },
  ];
  addNote(title: string, desc: string, date: string) {
    this.tableNote.forEach((data) => {
      if (data.title === 'Title') {
        data.values.push(title);
      }
      if (data.title === 'Description') {
        data.values.push(desc);
      }
      if (data.title === 'Date') {
        data.values.push(date);
      }
    });
    localStorage.setItem('tables', JSON.stringify(this.tableNote));
  }
  deleteNote(index: number) {
    this.tableNote.forEach((item, i) => {
      this.tableNote[i].values.splice(index, 1);
    });
    localStorage.setItem('tables', JSON.stringify(this.tableNote));
  }
  updateNote(index: number, title: string, desc: string, date: string) {
    this.tableNote[0].values.splice(index, 1, title);
    this.tableNote[1].values.splice(index, 1, desc);
    this.tableNote[2].values.splice(index, 1, date);
    localStorage.setItem('tables', JSON.stringify(this.tableNote));
  }
}
