import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  signinForm = new FormGroup({});
  signinFormMessages: string[] = [];
  submitionError: boolean = false;

  constructor(public fb: FormBuilder, public auth: AuthService, private router: Router) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.onSigninFormChanges();
  }

  buildForm() {
    this.signinForm = this.fb.group({
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
          Validators.required,
          Validators.minLength(6)
        ])
      ]
    });
  }

  signinFormSubmition() {
    if (this.signinForm.valid) {
      this.auth.emailSignup(
        this.signinForm.get('email')?.value, 
        this.signinForm.get('password')?.value
      ).then(
        () => {
          this.router.navigateByUrl('/home');
        }
      ).catch(
        (error) => {
          this.signinFormMessages = ["* Cuenta ya registrada"];
          this.submitionError = true;
        }
      );
    }
  }

  isInputValid(formControlName: string) {
    return !this.signinForm?.get(formControlName)?.valid && 
    (
      this.signinForm?.get(formControlName)?.touched || 
      this.signinForm?.get(formControlName)?.dirty
    );
  }

  onSigninFormChanges(): void {
    this.signinForm.valueChanges.subscribe(val => {

      let messagesArray = [];
      
      if (
        this.signinForm.get('email')?.hasError('required') || 
        this.signinForm.get('email')?.hasError('email')
      ) {
        messagesArray.push("* Ingrese un email válido");
      }

      if (
        this.signinForm.get('password')?.hasError('minlength')
      ) {
        messagesArray.push("* La clave debe tener al menos 6 (seis) caracteres");
      }

      this.signinFormMessages = messagesArray;

    });
  }

}
