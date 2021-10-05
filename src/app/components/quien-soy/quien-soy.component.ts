import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  profileForm: FormGroup;
  focusedFormControl: AbstractControl;

  constructor(private auth: AuthService, private fb: FormBuilder) {

    this.profileForm = this.fb.group({
      email: [{value: "", disabled: true}],
      photoURL: [''],
      displayName: ['']
    });

    this.focusedFormControl = new FormControl();

  }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      (user) =>  { 
        this.profileForm.setValue({
          email: user?.email,
          photoURL: user?.photoURL,
          displayName: user?.displayName
        })
      }
    );
    this.focusedFormControl
  }

  profileFormSubmition() {

    if (this.profileForm.valid) {
      this.auth.loggedUser().subscribe(
        (user: firebase.User | null) => {

          if (user) {
            user.updateProfile(
              {
                photoURL: this.profileForm.controls["photoURL"].value,
                displayName: this.profileForm.controls["displayName"].value
              }
            ).then(

            ).catch(

            )
          }
          
        }
      );
    }

  }

  processIncomingKey(key: string) {

    if (key !== 'borrar') {
      this.focusedFormControl.setValue(
        (
          this.focusedFormControl.value == null ? 
          '' : 
          this.focusedFormControl.value
        ) + key
      )
    } else {
      if( this.focusedFormControl.value !== null ) {
          this.focusedFormControl.setValue (
            (this.focusedFormControl.value as String).slice(0, -1)
          );
      }
    }
    
  }

  onFocus(displayNameElement: any) {
    if(displayNameElement.id != null) {
      if (displayNameElement.id == "profile-display-name") {
        this.focusedFormControl = this.profileForm.controls["displayName"];
      }
    }
  }

}
