import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateArticleComponent } from './pages/dashboard/create-article/create-article.component';
import { AuthGuard } from './core/guard/authentication.guard';
import { AllArticlesComponent } from './pages/dashboard/all-articles/all-articles.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      {
        path: '',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        children: [
          {
            path: 'articles',
            canActivate: [AuthGuard],
            component: AllArticlesComponent,
          },
          {
            path: 'articles/create',
            canActivate: [AuthGuard],
            component: CreateArticleComponent,
          },
          {
            path: 'articles/edit/:slug',
            canActivate: [AuthGuard],
            component: CreateArticleComponent,
          },

        ]
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
