import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { AllArticlesComponent } from './pages/dashboard/all-articles/all-articles.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateArticleComponent } from './pages/dashboard/create-article/create-article.component';
import { AuthInterceptorService } from './core/interceptor/authentication.interceptor';
import { AuthGuard } from './core/guard/authentication.guard';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllArticlesComponent,
    DashboardComponent,
    CreateArticleComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
