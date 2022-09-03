import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ) {}
  tagList = [];
  editMode: boolean = false;
  slug: string = '';
  submitted = false;
  form = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    body: [''],
    tagList: [['kimia']],
  });
  loading: boolean = false;

  ngOnInit() {
    this.getTagList();
    this.slug = this.route?.snapshot?.params['slug'];
    if (this.slug) {
      this.editMode = true;
      this.articleService.getArticle(this.slug).subscribe((res: any) => {
        this.form.patchValue(res.article);
      });
    }
  }

  getTagList() {
    this.articleService.getTagList().subscribe((res: any) => {
      this.tagList = res.tags;
    });
  }

  formSubmit() {
    this.submitted = true;
    if (this.editMode) {
      this.loading = true
      this.articleService.updateArticle(this.slug, this.form.value).subscribe(
        (res: any) => {
          this.loading = false;
          this.router.navigate(['/articles']);
        },
        error => {
          this.loading = false;
          console.log(error);
        }
      );
    } else {
      this.loading = true
      this.articleService.postArticle(this.form.value).subscribe((res: any) => {
        this.router.navigate(['/articles']);
        this.loading = false;
      });
    }
  }
}
