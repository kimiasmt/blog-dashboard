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
  editMode : boolean = false;
  slug: string = ''
  form = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    body: ['', [Validators.required]],
    tagList: [['kimia'], [Validators.required]],
  });

  ngOnInit() {
    this.getTagList();
    this.slug = this.route?.snapshot?.params['slug'];
    if(this.slug) {
      this.editMode = true;
      this.articleService.getArticle(this.slug).subscribe((res:any) => {
        this.form.patchValue(res.article)
      })
    }
  }

  getTagList() {
    this.articleService.getTagList().subscribe((res:any) => {
      this.tagList = res.tags;
    })
  }

  formSubmit() {
    if(this.editMode) {
      this.articleService.updateArticle(this.slug,this.form.value).subscribe((res:any)=>{
        this.router.navigate(['/articles'])
      }, error => {
        console.log(error);})
    } else {
      this.articleService.postArticle(this.form.value).subscribe((res: any) => {
        this.router.navigate(['/articles'])
      });
    }
  }
}
