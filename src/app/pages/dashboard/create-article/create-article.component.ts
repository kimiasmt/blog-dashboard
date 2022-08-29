import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ArticlesService } from '../../../core/services/articles.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private articleService: ArticlesService
  ) {}

  form = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    body: ['', [Validators.required]],
    tagList: [['kimia'], [Validators.required]],
  });

  ngOnInit() {}

  formSubmit() {
    // if (this.form.valid) {
    this.articleService.postArticle(this.form.value).subscribe((res: any) => {
      console.log(res);
    });
    // else {
    //       console.log(this.form.)
    //     }
  }
}
