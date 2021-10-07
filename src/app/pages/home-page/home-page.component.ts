import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cards: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setCards();
  }

  setCards() {
    this.cards = [
      {
        title: "El Camino",
        description: "¿Podrás recordar el camino y llegar a salvo a destino?",
        path: "/el-camino",
        img: "assets/images/elcamino.png"
      },
      {
        title: "¿En Qué Club Juega?",
        description: "¡Llegó el preguntados del fútbol argentino!",
        path: "/preguntados",
        img: "assets/images/futbol1_0.png"
      },
      {
        title: "Ahorcado",
        description: "El clásico juego del ahorcado, para pasar un buen rato.",
        path: "/hangman",
        img: "assets/images/ahorcado.png"
      },
      {
        title: "¿Mayor o Menor?",
        description: "El juego ideal para la previa. Recordar las cartas que ya salieron permite afinar la predicción.",
        path: "/mayorMenor",
        img: "assets/images/mayormenor.png"
      },
      {
        title: "¡Contános!",
        description: "Tu opinión nos ayuda a crecer. Expresáte libremente en esta breve encuesta. Nosotros te leemos.",
        path: "/survey",
        img: "assets/images/survey.png"
      },
      {
        title: "La Sala De Chat",
        description: "Un chat en tiempo real para que puedas comunicarte con amigos y enemigos.",
        path: "/chat-room",
        img: "assets/images/chat-room.png"
      }
    ]
  }

}
