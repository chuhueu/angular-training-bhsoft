import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NoteService, AuthService } from './services/index';
import {
  NoteComponent,
  NoteAddComponent,
  NoteEditComponent,
  AuthComponent,
  LoginComponent,
  SignupComponent,
  TableComponent,
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    TableComponent,
    NoteAddComponent,
    NoteEditComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [NoteService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
