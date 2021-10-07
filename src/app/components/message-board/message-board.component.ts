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
    new ChatMessage("", "", "", "")
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

      }
    );
  }

  updateBoardPosition () {

  }

  getFormatedDate(timestamp: string) {
    
    const dateObj = new Date(Number(timestamp) * 1000);
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    return (
      day + "/" + 
      (month + 1) + "/" + 
      year + " " + 
      hours + ":" + 
      minutes
    );
  }

}