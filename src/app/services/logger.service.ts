import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private capturedRequest: any = null;
  private capturedResponse: any = null;

  setRequest(request: any): void {
    this.capturedRequest = request;
  }

  getRequest(): any {
    return this.capturedRequest;
  }

  setResponse(response: any): void {
    this.capturedResponse = response;
  }

  getResponse(): any {
    return this.capturedResponse;
  }
}
