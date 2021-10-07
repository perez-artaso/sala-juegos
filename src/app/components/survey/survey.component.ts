import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  survey: FormGroup;
  surveySubmitted: boolean = false;

  constructor(private fb: FormBuilder, private surveyService: SurveyService, private auth: AuthService, private router: Router) { 
    this.survey = this.fb.group(
      {

        'fullname': ['', Validators.required],
        'age': ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
        'phone': ['', Validators.compose([Validators.max(9999999999), Validators.required])],
        'isOwner': [false],
        'gender': ['m', Validators.required],
        'comentaries': ['', Validators.required]

      }
    );
  }

  ngOnInit(): void {

  }

  submitSurvey(){

    if(this.survey.valid) {

      this.auth.loggedUser().subscribe(
        (user) => {
          this.surveyService.submitSurvey(
            {
              userId: user?.uid,
              fullname: this.survey.controls['fullname'].value,
              age: this.survey.controls['age'].value,
              phone: this.survey.controls['phone'].value,
              isOwner: this.survey.controls['isOwner'].value,
              gender: this.survey.controls['gender'].value,
              comentaries: this.survey.controls['comentaries'].value
            }
          );

          this.surveySubmitted = true;

          setTimeout(
            () => this.router.navigate(['home']),
            2500
          );

        }
      );

    }
  }

  isInputValid(formControlName: string) {
    return !this.survey?.get(formControlName)?.valid && 
    (
      this.survey?.get(formControlName)?.touched || 
      this.survey?.get(formControlName)?.dirty
    );
  }

}
