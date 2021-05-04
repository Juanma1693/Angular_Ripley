import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeAccount } from '../models/TypeAccount';

@Injectable({
    providedIn: 'root'
})
export class TypeAccountService {

    API_URI = 'https://node-ripley.herokuapp.com/typeAccount';
    constructor(private http: HttpClient) { }

    getAll(): Observable<TypeAccount[]> {
        return this.http.get<TypeAccount[]>(`${this.API_URI}`);
    }

}
