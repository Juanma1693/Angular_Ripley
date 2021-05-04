import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bank } from '../models/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  API_URI = 'https://bast.dev/api/banks.php';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.API_URI}`);
}
}
