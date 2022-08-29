import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  getArticles() {
    return this._http.get(`${this.baseUrl}/articles`);
  }

}
