import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() isUser: boolean;
  display: Array<string>;
  showAlertLogin = false;
  constructor(
    private noteService: NoteService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.display = this.data[0].values;
  }
  open(content: any) {
    this.modalService.open(content);
  }
  onHandleDelete(index: number) {
    this.noteService.deleteNote(index);
  }
  onShowAlert() {
    this.showAlertLogin = true;
    setTimeout(() => {
      this.showAlertLogin = false;
    }, 2000);
  }
}
