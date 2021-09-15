import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { MessageInputComponent } from './components/message-input/message-input.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    HeaderNavbarComponent,
    LoginFormComponent,
    SigninFormComponent,
    HomePageComponent,
    ChatRoomComponent,
    ChatWindowComponent,
    MessageBoardComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [
    { 
      provide: AUTH_SETTINGS, 
      useValue: { appVerificationDisabledForTesting: true } 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }