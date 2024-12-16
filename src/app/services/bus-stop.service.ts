import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusStopService {
  private apiUrl = 'http://localhost:5000/api/busstop';

  constructor(private http: HttpClient) {}

  getBestBusStops(): Observable<any> {
    return this.http.get(`${this.apiUrl}/best-bus-stops`);
  }
}
