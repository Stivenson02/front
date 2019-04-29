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
export class GeneralService {
  public API_URL = environment.API_URL;

  constructor(
      private http: HttpClient) { }

  getCity(id){
    return this.http.get(this.API_URL+'api/general/cities/'+id, httpOptions);
  }

  getDepartament(){
    return this.http.get(this.API_URL+'api/general/departaments', httpOptions);
  }

}
