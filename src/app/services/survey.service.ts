import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private firestore: FirestoreService) { }

  submitSurvey(surveyDoc: any) {
    return this.firestore.saveDocument('surveys', surveyDoc);
  }

}
