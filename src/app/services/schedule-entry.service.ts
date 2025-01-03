import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScheduleEntryService {
  private apiBaseUrl = `${environment.apiBaseUrl}/schedule-entries`;

  constructor(private http: HttpClient) {}

  getAllScheduleEntries(): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<HttpResponse<any>>(this.apiBaseUrl, { headers, observe: 'response' });
  }

  getScheduleEntryById(id: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, { headers, observe: 'response' });
  }

  getScheduleEntriesByScheduleId(scheduleId: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<HttpResponse<any>>(`${this.apiBaseUrl}/schedule/${scheduleId}`, { headers, observe: 'response' });
  }

  createScheduleEntry(scheduleEntryData: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<HttpResponse<any>>(this.apiBaseUrl, scheduleEntryData, { headers, observe: 'response' });
  }

  updateScheduleEntry(id: string, scheduleEntryData: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, scheduleEntryData, { headers, observe: 'response' });
  }

  deleteScheduleEntry(id: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<HttpResponse<any>>(`${this.apiBaseUrl}/${id}`, { headers, observe: 'response' });
  }
}
