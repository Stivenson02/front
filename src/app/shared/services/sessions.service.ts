import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

import {environment} from "../../../environments/environment";
import {ProfileUser} from "../../global/models/profile-user";
import {ModelFile} from "../../global/models/modelFile";

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

    updateAvatarFiles(file){
        return this.http.post(this.API_URL+'api/user/file_avatar',file, httpOptions);
    }
    getAllFiles(){
        return this.http.get(this.API_URL+'api/user/file_all', httpOptions);
    }
    updateLogoFiles(file){
        return this.http.post(this.API_URL+'api/user/file_logo',file, httpOptions);
    }
    updateIdentityFiles(file){
        return this.http.post(this.API_URL+'api/user/file_identity',file, httpOptions);
    }
    updateNitFiles(file){
        return this.http.post(this.API_URL+'api/user/file_nit',file, httpOptions);
    }
    updateRutFiles(file){
        return this.http.post(this.API_URL+'api/user/file_rut',file, httpOptions);
    }
    updateCommerceFiles(file){
        return this.http.post(this.API_URL+'api/user/file_chamber_commerce',file, httpOptions);
    }

    deleteFiles(id_document){
        return this.http.delete(this.API_URL+'api/user/file_delete/'+id_document, httpOptions);
    }
}
