import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService);
  const token = localStorage.getItem('jwtToken');

  const authReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  
  const simplifiedRequest = {
    method: authReq.method,
    url: authReq.urlWithParams,
    headers: {
      ...authReq.headers.keys().reduce((acc: { [key: string]: string | null }, key: string) => {
        acc[key] = authReq.headers.get(key);
        return acc;
      }, {}),
    },
    body: authReq.body,
  };

  logger.setRequest(simplifiedRequest);

  return next(authReq);
};
