import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';
import { ElCaminoComponent } from './components/el-camino/el-camino.component';
import { MayorOMenorComponent } from './components/mayor-o-menor/mayor-o-menor.component';
import { SurveyComponent } from './components/survey/survey.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login-form', pathMatch: 'full' },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'signin-form', component: SigninFormComponent },
  { path: 'profile', component: QuienSoyComponent, canActivate: [AuthGuardGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuardGuard]},
  { path: 'chat-room', component: ChatRoomComponent, canActivate: [AuthGuardGuard] },
  { path: 'hangman', component: AhorcadoComponent, canActivate: [AuthGuardGuard] },
  { path: 'preguntados', component: PreguntadosComponent, canActivate: [AuthGuardGuard] },
  { path: 'el-camino', component: ElCaminoComponent, canActivate: [AuthGuardGuard] },
  { path: 'mayorMenor', component: MayorOMenorComponent, canActivate: [AuthGuardGuard]},
  { path: 'survey', component: SurveyComponent, canActivate: [AuthGuardGuard] },
  { path: 'access-denied', component: AccessDeniedComponent }
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
