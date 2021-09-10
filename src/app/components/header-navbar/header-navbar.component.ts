import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  loggedUser: firebase.User | null;

  constructor(private auth: AuthService, private router: Router) {
    this.loggedUser = null;
  }

  ngOnInit(): void {
    this.observeUser();
  }

  observeUser() {
    this.auth.loggedUser().subscribe(
      (user) => {
        this.loggedUser = user;
      }
    );
  }

  navigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  logout() {
    this.auth.logout();
  }

}
