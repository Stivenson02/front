import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

import {environment} from "../../../environments/environment";
import {ProfileUser} from "../../global/models/profile-user";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('SF-Token')}
  )};

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  public API_URL = environment.API_URL;

  constructor(
      private http: HttpClient) { }

  getData(){
    return this.http.get(this.API_URL+'api/user/detail', httpOptions);
  }

  updateData(profile: ProfileUser): Observable<ProfileUser>{
    return this.http.put<ProfileUser>(this.API_URL+'api/user/update',profile, httpOptions);
  }
}
