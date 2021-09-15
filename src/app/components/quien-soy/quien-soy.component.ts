import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  loggedUser: any;
  profileForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) { 
    this.profileForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      (user) =>  { 
        this.loggedUser = user;
        this.profileForm = this.fb.group({
          email: [this.loggedUser.email],
          photoURL: [this.loggedUser.photoURL],
          displayName: [this.loggedUser.displayName]
        });
      }
    );
  }

  profileFormSubmition() {

  }

}
