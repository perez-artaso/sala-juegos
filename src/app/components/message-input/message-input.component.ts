import { userError } from '@angular/compiler-cli/src/transformers/util';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  messageInput: string;

  constructor(private firestore: FirestoreService, private auth: AuthService) {
    this.messageInput = "";
  }

  ngOnInit(): void {
  }

  sendMessage() {

    this.auth.loggedUser().subscribe(
      (user) => {
        this.firestore.saveDocument(
          'chatMessages',
          {
            message: this.messageInput,
            userId: user?.uid,
            displayName: user?.displayName,
            timestamp: Math.floor(new Date().getTime()/1000.0).toString()
          }
        ).then(
          (response) => this.messageInput = ""
        ).catch(
          (error) => this.messageInput = "ERROR DE CONEXIÓN: " + error
        )
      }
    )

  }

  keydownPressed(event: any) {
    if(event.keyCode == 13) {
      this.sendMessage();
    }
  }

}
