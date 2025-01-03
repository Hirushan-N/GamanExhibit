import { HttpInterceptorFn } from '@angular/common/http';
import { HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { throwError } from 'rxjs';

export const HttpLoggerInterceptor: HttpInterceptorFn = (req, next) => {
  const loggerService = inject(LoggerService);

  const capturedRequest = {
    method: req.method,
    url: req.urlWithParams,
    headers: req.headers.keys().reduce((acc: { [key: string]: string | null }, key: string) => {
      acc[key] = req.headers.get(key);
      return acc;
    }, {}),
    body: req.body,
  };
  loggerService.setRequest(capturedRequest);

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Response) {
        const capturedResponse = {
          statusCode: event.status,
          statusText: event.statusText,
          headers: event.headers.keys().reduce((acc: { [key: string]: string | null }, key: string) => {
            acc[key] = event.headers.get(key);
            return acc;
          }, {}),
          body: {
            data: event.body,
            message: "Operation completed successfully.",
          },
        };
        loggerService.setResponse(capturedResponse);
      }
    }),
    catchError((error: HttpErrorResponse) => {
      const capturedErrorResponse = {
        statusCode: error.status,
        statusText: error.statusText || 'Error',
        headers: error.headers.keys().reduce((acc: { [key: string]: string | null }, key: string) => {
          acc[key] = error.headers.get(key);
          return acc;
        }, {}),
        body: {
          error: {
            code: error.status,
            details: error.error || 'No response body',
          },
          message: "An error occurred.",
        },
      };
      loggerService.setResponse(capturedErrorResponse);
      return throwError(() => error);
    })
  );
};
