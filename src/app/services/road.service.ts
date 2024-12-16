import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoadsService {
  private apiUrl = 'http://localhost:5000/api/road';

  constructor(private http: HttpClient) {}

  getRoadsToAvoid(): Observable<any> {
    return this.http.get(`${this.apiUrl}/roads-to-avoid`);
  }
}
