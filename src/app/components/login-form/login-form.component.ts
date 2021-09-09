import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({});
  loginFormMessages: string[] = [];
  wrongCredentials = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.onLoginFormChanges();
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
          this.router.navigateByUrl('/home');
        }
      ).catch(
        (error) => {
          this.wrongCredentials = true;
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