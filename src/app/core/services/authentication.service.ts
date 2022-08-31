import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _http: HttpClient, private router: Router) {}

  baseUrl = environment.baseUrl;
  loginStatus$ = new BehaviorSubject(false);

  login(data: any) {
    return this._http.post(`${this.baseUrl}/users/login`, { user: data }).pipe(
      tap((data: any) => {
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('user', data.user.username);
        this.loginStatus$.next(true);
        this.router.navigate(['/articles']);
      })
    );
  }

  register(data: any) {
    return this._http
      .post(`${this.baseUrl}/users`, { user: data })
      .pipe(tap(_ => this.router.navigate(['/login'])));
  }

  isLogin(): boolean {
    return localStorage.getItem('token') != null;
  }
}
