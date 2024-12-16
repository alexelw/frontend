import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private apiUrl = 'http://localhost:5000/api/routes';

  constructor(private http: HttpClient) {}

  getRoutesAffectedByRoadworks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/affected-by-roadworks`);
  }
}
