import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sendRequest(method: string, url: string, params?: any, body?: any) {
    const options: any = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    if (method === 'GET' && params) {
      options.params = new HttpParams({ fromObject: params });
    } else if (body) {
      options.body = body;
    }

    return this.http.request(method, url, options);
  }
}
