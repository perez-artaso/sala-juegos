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
import { DPadComponent } from './components/d-pad/d-pad.component';

const routes: Routes = [
  { path: '', redirectTo: '/el-camino', pathMatch: 'full' },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'signin-form', component: SigninFormComponent },
  { path: 'profile', component: QuienSoyComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'chat-room', component: ChatRoomComponent },
  { path: 'hangman', component: AhorcadoComponent },
  { path: 'preguntados', component: PreguntadosComponent },
  { path: 'el-camino', component: ElCaminoComponent }
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
