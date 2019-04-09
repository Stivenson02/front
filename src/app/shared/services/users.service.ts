import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import {environment} from "../../../environments/environment";
import { User } from '../../global/models/user';


const httpOptions = {
  headers: new HttpHeaders({'Accept': 'application/json'}
  )};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.API_URL+'oauth/token', user, httpOptions);
  }

}
