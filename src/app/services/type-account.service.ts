import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeAccount } from '../models/TypeAccount';

@Injectable({
    providedIn: 'root'
})
export class TypeAccountService {

    API_URI = 'http://localhost:5000/typeAccount';
    constructor(private http: HttpClient) { }

    getAll(): Observable<TypeAccount[]> {
        return this.http.get<TypeAccount[]>(`${this.API_URI}`);
    }

}
