import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { MayorOMenorComponent } from './components/mayor-o-menor/mayor-o-menor.component';
import { OnscreenKeyboardComponent } from './components/onscreen-keyboard/onscreen-keyboard.component';
import { KeyComponent } from './components/key/key.component';
import { CardComponent } from './components/card/card.component';
import { SuitImgUrlPipe } from './pipes/suit-img-url.pipe';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';
import { ElCaminoComponent } from './components/el-camino/el-camino.component';
import { SquareComponent } from './components/el-camino/square/square.component';
import { BoardComponent } from './components/el-camino/board/board.component';
import { RoadblockPipe } from './pipes/roadblock.pipe';
import { DPadComponent } from './components/d-pad/d-pad.component';
import { SurveyComponent } from './components/survey/survey.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { DisplayNameFromIdPipe } from './pipes/display-name-from-id.pipe';

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
    MessageInputComponent,
    AhorcadoComponent,
    MayorOMenorComponent,
    OnscreenKeyboardComponent,
    KeyComponent,
    CardComponent,
    SuitImgUrlPipe,
    CardDeckComponent,
    PreguntadosComponent,
    ElCaminoComponent,
    SquareComponent,
    BoardComponent,
    RoadblockPipe,
    DPadComponent,
    SurveyComponent,
    AccessDeniedComponent,
    DisplayNameFromIdPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    HttpClientModule
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