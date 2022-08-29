import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../core/services/articles.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss'],
})
export class AllArticlesComponent implements OnInit {
  constructor(private articlesService: ArticlesService) {}
  articles: any;
  getArticle() {
    this.articlesService.getArticles().subscribe((res: any) => {
      this.articles = res?.articles;
    });
  }

  ngOnInit(): void {
    this.getArticle();
    // console.log(this.getArticle());
  }
  parseDate(date: string) {
    let converted = new Date(date);
    return converted.toDateString();
  }
}
