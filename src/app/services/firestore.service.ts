import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollection(collectionName: string): Observable<unknown[]> {
    return this.firestore.collection(collectionName).valueChanges({ idField: 'docId' });
  }

  saveDocument(collectionName: string, document: unknown) {
    return this.firestore.collection(collectionName).add(document);
  }

  updateDocument(collectionName: string, documentId: string, document: Partial<unknown>) {
    return this.firestore.doc(collectionName + "/" + documentId).update(document);
  }

}
