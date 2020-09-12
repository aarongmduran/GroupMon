import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class GroupsService {

  private collectionGroups: AngularFirestoreCollection;

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {
  }

  // Añade el grupo a firebase.
  public createGroup(data: any) {
    return this.firestore.collection('groups').add(data);
  }

  // Busca un grupo por id.
  public getGroup(documentId: string) {
    return this.firestore.collection('groups').doc(documentId).snapshotChanges();
  }

  // Busca todos los grupos con un usuario determinado.
  public getGroups() {
    const luser = localStorage.getItem('userEmail').replace(/['"]+/g, '');
    return this.firestore.collection('groups', ref => ref.where('usuarios', 'array-contains', luser)).snapshotChanges();
  }

  // Actualiza la información de un grupo.
  public updateGroup(documentId: string, data) {
    return this.firestore.collection('groups').doc(documentId).update(data);
  }

  // Elimina un grupo por su id.
  public deleteGroup(documentId: string) {
    return this.firestore.collection('groups').doc(documentId).delete();
  }

}
