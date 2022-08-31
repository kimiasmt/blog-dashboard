import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  getArticles() {
    return this._http.get(`${this.baseUrl}/articles/`);
  }

  postArticle(data: any) {
    return this._http.post(`${this.baseUrl}/articles`, { article: data });
  }

  updateArticle(slug: string,data: any) {
    return this._http.put(`${this.baseUrl}/articles/${slug}`, { article: data });
  }

  deleteArticle(slug:string) {
    return this._http.delete(`${this.baseUrl}/articles/${slug}`,);
  }

  getTagList() {
    return this._http.get(`${this.baseUrl}/tags`);
  }

  getArticle(slug:string) {
    return this._http.get(`${this.baseUrl}/articles/${slug}`);
  }
}
