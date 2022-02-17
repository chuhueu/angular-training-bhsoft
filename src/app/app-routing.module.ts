import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NoteAddComponent } from './components/note/note-add/note-add.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteComponent } from './components/note/note.component';
import { TableComponent } from './components/table/table.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'note', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'note',
    component: NoteComponent,
    children: [
      { path: 'add', component: NoteAddComponent },
      { path: 'edit/:id', component: NoteEditComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
