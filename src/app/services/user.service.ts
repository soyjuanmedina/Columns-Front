import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
/* import { ProjectService } from './project.service';
import { Project } from '../interfaces/project'; */

const USER_CONTROLLER = '/user/';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User;
  error: string;

  constructor(private http: HttpClient) {
    if (typeof sessionStorage.getItem('auth-user') !== 'undefined') {
      this.user = JSON.parse(sessionStorage.getItem('auth-user'));
    }
  }

  getUser() {
    return this.http.post('/user/get', "").subscribe(
      data => {
        this.user = data as User;
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(this.user));
      },
      err => {
        this.error = err.error.message;
      }
    );;
  }

  saveUser(user: User) {
    return this.http.post('/user/save', user).subscribe(
      data => {
        this.user = data as User;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}