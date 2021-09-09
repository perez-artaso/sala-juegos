import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-form', pathMatch: 'full' },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'signin-form', component: SigninFormComponent },
  { path: 'profile', component: QuienSoyComponent },
  { path: 'home', component: HomePageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }