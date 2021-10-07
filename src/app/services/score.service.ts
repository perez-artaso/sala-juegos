import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private firestore: FirestoreService, private auth: AuthService) { }

  getScore(collectionName: string): Promise<any> {

    return new Promise(
      (resolve, reject) => {
        let found = false;

        this.auth.loggedUser().subscribe(
          (user) => {
            this.firestore.getCollection(collectionName).subscribe(
              (collection) => {
                collection.forEach(
                  (doc) => {
    
                    let docObj = doc as any;
    
                    if ((docObj.userId == user?.uid) && !found) {
                      resolve(docObj.score);
                    }
                                 
                  }
                  
                )

              }
            )
          }
        );

      }
    )

    
  }

  updateScore(collectionName: string, score: number) {

    this.auth.loggedUser().subscribe(
      (user) => {
        this.firestore.getCollection(collectionName).subscribe(
          (collection) => {
            collection.forEach(
              (doc) => {

                let docObj = doc as any;

                if (docObj.userId == user?.uid) {
                  this.firestore.updateDocument(collectionName, docObj.docId, {'score': score});
                }
                             
              }
            )
          }
        )
      }
    );

  }

  setScore(collectionName: string) {

    return new Promise (
      (resolve) => {
        this.auth.loggedUser().subscribe(
          (user) => {
            this.firestore.saveDocument(collectionName, {
              'userId': user?.uid,
              'score': 0,
              'lastlyPlayed': ''
            }).then(
              () => resolve(0)
            )
          }
        );
      }
    )
    
  }

  intializeAllScores() {
    this.setScore('ahorcadoScores');
    this.setScore('preguntadosScores');
    this.setScore('elCaminoScores');
    this.setScore('mayorMenorScores');
  }

}
