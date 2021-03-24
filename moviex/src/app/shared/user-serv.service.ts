import { Injectable } from '@angular/core';
 import { IUser } from './interfaces/IUser';
import { Observable, throwError } from 'rxjs';
import { UserData } from './class';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServService {
  _url = "http://localhost:8000/api/users/register"; // for sign up
  _url2 = "http://localhost:8000/api/users/authenticate"; // for login
  constructor(private _http: HttpClient) { }

  signUp(user: UserData) {
    this._http.post<UserData>(this._url, user).subscribe(
      data => console.warn(data),
      err => throwError(err)
    );
  }

  logIn(user: UserData) {
    return this._http.post<UserData>(this._url2, user)

  }
}
