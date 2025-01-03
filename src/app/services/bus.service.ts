import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private apiBaseUrl = 'http://localhost:3000/api/buses';

  constructor(private http: HttpClient) {}

  searchBuses(filters: any): Observable<HttpResponse<any>> {
    const params = filters; // Send filters as query parameters
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<HttpResponse<any>>(this.apiBaseUrl, { headers, params, observe: 'response' });
  }

  createBus(busData: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<HttpResponse<any>>(this.apiBaseUrl, busData, { headers, observe: 'response' });
  }

  updateBus(id: string, busData: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, busData, { headers, observe: 'response' });
  }

  deleteBus(id: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, { headers, observe: 'response' });
  }
}
