import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiBaseUrl = `${environment.apiBaseUrl}/tickets`;

  constructor(private http: HttpClient) {}

  searchTickets(queryParams: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<HttpResponse<any>>(this.apiBaseUrl, {
      headers,
      params: queryParams,
      observe: 'response',
    });
  }

  createTicket(ticketData: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<HttpResponse<any>>(this.apiBaseUrl, ticketData, { headers, observe: 'response' });
  }

  updateTicket(id: string, updateData: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, updateData, { headers, observe: 'response' });
  }

  deleteTicket(id: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, { headers, observe: 'response' });
  }
}
