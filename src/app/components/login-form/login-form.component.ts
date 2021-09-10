import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import firebase from 'firebase/compat/app';
import { AccessLog } from 'src/app/models/access-log';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loggedUser: firebase.User | null = null;
  loginForm = new FormGroup({});
  loginFormMessages: string[] = [];
  wrongCredentials = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private firestore: FirestoreService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.observeUser();
    this.onLoginFormChanges();
  }

  observeUser() {
    this.auth.loggedUser().subscribe(
      (user) => {
        this.loggedUser = user;
        console.dir(this.loggedUser);
      }
    );
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: [
        '', 
        Validators.compose([
          Validators.required, 
          Validators.email
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  loginFormSubmition() {
    if (this.loginForm.valid) {
      this.auth.login(
        this.loginForm.get('email')?.value, 
        this.loginForm.get('password')?.value
      ).then(
        () => {
          
          this.auth.loggedUser().subscribe(
            (user) => {

              this.firestore.saveDocument(
                'accessLogs', 
                {
                  userId: user?.uid, 
                  timestamp: Math.floor(new Date().getTime()/1000.0).toString()
                }
              )
              .then(
                () => this.router.navigateByUrl('/home')
              ).catch(
                (error) => console.log(error)
              );

            }
          )

        }
      ).catch(
        (error) => {
          this.wrongCredentials = true;
          console.dir(error);
          this.loginFormMessages = ["* Credenciales incorrectas"];
        }
      );
    }
  }

  isInputValid(formControlName: string) {
    return !this.loginForm?.get(formControlName)?.valid && 
    (
      this.loginForm?.get(formControlName)?.touched || 
      this.loginForm?.get(formControlName)?.dirty
    );
  }

  onLoginFormChanges(): void {
    this.loginForm.valueChanges.subscribe(val => {

      this.wrongCredentials = false;
      let messagesArray = [];
      
      if (
        this.loginForm.get('email')?.hasError('required') || 
        this.loginForm.get('email')?.hasError('email')
      ) {
        messagesArray.push("* Ingrese un email válido");
      }

      if (
        this.loginForm.get('password')?.hasError('required')
      ) {
        messagesArray.push("* Ingrese su clave");
      }

      this.loginFormMessages = messagesArray;

    });
  }

  fillForm(index: number) {
    switch (index) {
      case 1:

        this.loginForm.setValue({
          email: 'astor.piazzolla@gmail.com',
          password: 123456
        });

      break;

      case 2:

        this.loginForm.setValue({
          email: 'chelo.delgado@gmail.com',
          password: 123456
        });
        
      break;

      case 3:

        this.loginForm.setValue({
          email: 'elnegro.titanio@gmail.com',
          password: 123456
        });
        
      break;

    }
  }

}