import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private apiBaseUrl = `${environment.apiBaseUrl}/routes`;

  constructor(private http: HttpClient) {}

  searchRoutes(filters: any): Observable<HttpResponse<any>> {
    const params = filters; // Send filters as query parameters
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<HttpResponse<any>>(this.apiBaseUrl, { headers, params, observe: 'response' });
  }

  createRoute(routeData: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<HttpResponse<any>>(this.apiBaseUrl, routeData, { headers, observe: 'response' });
  }

  updateRoute(id: string, routeData: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, routeData, { headers, observe: 'response' });
  }

  deleteRoute(id: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, { headers, observe: 'response' });
  }
}
