import { Component, OnInit } from '@angular/core';
import { Table } from '../../services/note.service';
import { Router } from '@angular/router';
import { AuthService, NoteService } from '../../services/index';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  viewTableNote: Table[];
  isUser = false;
  user = JSON.parse(localStorage.getItem('user')!) || null;
  constructor(
    private noteService: NoteService,
    private authService: AuthService,
    private router: Router
  ) {
    this.viewTableNote = this.noteService.tableNote;
  }
  ngOnInit(): void {
    if (this.user) {
      this.isUser = true;
    }
    this.authService.getUser().subscribe((data) => {
      console.log(data);
    });
  }
  onHandleLogOut() {
    this.authService.logout();
    this.isUser = false;
    this.router.navigate(['/note']);
  }
}
