import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from '../models/History';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    API_URI = 'https://node-ripley.herokuapp.com/history';
    constructor(private http: HttpClient) { }

    getAll(): Observable<History[]> {
        return this.http.get<History[]>(`${this.API_URI}`);
    }

    create(history: History): Observable<History> {
        return this.http.post<History>(`${this.API_URI}`, history);
    }

}
