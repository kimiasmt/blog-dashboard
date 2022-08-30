import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateArticleComponent } from './pages/dashboard/create-article/create-article.component';
import { AuthGuard } from './core/guard/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // pathMatch: 'full',
        canLoad: [AuthGuard],
      },
      {
        path: 'articles/create',
        component: CreateArticleComponent,
        // pathMatch: 'full',
        canLoad: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
