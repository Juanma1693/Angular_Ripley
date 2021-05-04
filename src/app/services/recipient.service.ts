import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipient } from '../models/Recipient';

@Injectable({
    providedIn: 'root'
})
export class RecipientService {

    API_URI = 'https://node-ripley.herokuapp.com/recipient';
    constructor(private http: HttpClient) { }

    getAll(): Observable<Recipient[]> {
        return this.http.get<Recipient[]>(`${this.API_URI}`);
    }

    create(recipient: Recipient): Observable<Recipient> {
        console.log(recipient);
        return this.http.post<Recipient>(`${this.API_URI}`, recipient);
    }

    getOne(id: string): Observable<Recipient[]> {
        return this.http.get<Recipient[]>(`${this.API_URI}/${id}`);
    }

    update(update: Recipient): Observable<Recipient[]> {
        return this.http.put<Recipient[]>(`${this.API_URI}`, update);
    }
}
