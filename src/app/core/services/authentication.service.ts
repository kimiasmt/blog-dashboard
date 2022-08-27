import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  login(data: any) {
    return this._http.post(`${this.baseUrl}/users/login`,{user: data})
  }

  signUp() {
    return this._http.get(`${this.baseUrl}/register`)
  }

}
