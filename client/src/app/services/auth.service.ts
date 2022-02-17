import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl = 'http://localhost:5000/api/auth/login';
  registerUrl = 'http://localhost:5000/api/auth/register';
  userUrl = 'http://localhost:5000/api/user';
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    return this.http.post<UserModel>(
      this.loginUrl,
      {
        email: email,
        password: password,
      },
      httpOptions
    );
  }
  public register(username: string, email: string, password: string) {
    return this.http.post<UserModel>(
      this.registerUrl,
      {
        username: username,
        email: email,
        password: password,
      },
      httpOptions
    );
  }
  public logout() {
    return localStorage.removeItem('user');
  }
  public getUser() {
    return this.http.get(this.userUrl, httpOptions);
  }
}
