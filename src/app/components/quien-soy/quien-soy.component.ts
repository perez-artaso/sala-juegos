import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  loggedUser: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      (user) => this.loggedUser = user
    );
  }

}
