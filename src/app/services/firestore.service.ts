import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollection(collectionName: string): Observable<unknown[]> {
    return this.firestore.collection(collectionName).valueChanges();
  }

  saveDocument(collectionName: string, document: unknown) {
    return this.firestore.collection(collectionName).add(document);
  }

}
