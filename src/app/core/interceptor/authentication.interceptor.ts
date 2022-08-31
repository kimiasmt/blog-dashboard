import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    console.log('kim', token);

    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Token ${token}`),
      });
    }

    return next.handle(req).pipe(
      tap(res => {
        return res;
      }),
      catchError((error: any) => {
        localStorage.removeItem('token');
        return throwError(error);
      })
    );
  }
}
