import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import firebase from 'firebase/compat/app';
import { ChatMessage } from 'src/app/models/chat-message';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  messages: ChatMessage[] = [
    new ChatMessage("", "", "")
  ];

  constructor(private firestore: FirestoreService) {

  }

  ngOnInit(): void {
    this.updateBoardPosition();
    this.observeMessages();
  }

  observeMessages () {
    this.firestore.getCollection('chatMessages').subscribe(
      (messages: unknown[]) => {

        this.messages = messages as ChatMessage[];
        console.dir(this.messages);

      }
    );
  }

  updateBoardPosition () {

  }

}