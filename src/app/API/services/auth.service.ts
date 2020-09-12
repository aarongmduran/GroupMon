import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { GroupsService } from '../content/groups.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any; // Guarda la información del usuario.
  emailRegister: string; // Guarda el usuario loggeado.

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private firestoreService: GroupsService,
    private firestore: AngularFirestore
  ) {

    // Guarda la información del usuario loggeado y la elimina al cerrar sesión.
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }


  // Registra el usuario en firebase y pasa a terminar el login.
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.FinishLogin();
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Abre la página de dar la información final.
  FinishLogin() {
      this.router.navigate(['giveInfo']);
  }

  // Cumplimenta en Firebase la información final.
  FinishLoginInfo(userName: string, urlImage){
    const dineroIntrod:number = 0;
    const movements = ['El usuario ha sido creado'];
    const user = this.afAuth.auth.currentUser;
    const newThings = {
      displayName: userName,
      photoURL: urlImage,
      dinero: dineroIntrod,
      movimientos: movements
    };
    this.afAuth.auth.onAuthStateChanged(function(user) {
      user.updateProfile(newThings);
    });
    this.firestore.collection('users').doc(user.uid).update(newThings);
    this.router.navigate(['signin']);
  }

  // Inicia sesión
  SignIn(email, password) {
    localStorage.setItem('userEmail', JSON.stringify(email));
    JSON.parse(localStorage.getItem('userEmail'));
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['profile']);
        });
      }).catch((error) => {
        alert("Usuario y contraseña no encontrados")
      });
  }

  // Inicia sesión y registra con Google.
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Permite la entrada del usuario.
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['profile']);
        });
        this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error);
    });
  }

  // Sube a la database de Firebase la información del usuario.
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: null,
      photoURL: null
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Cierra sesión.
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('userEmail');
      this.router.navigate(['signin']);
    });
  }

  // Devuelve un usuario por su email.
  GetUserByMail(mail){
    return this.firestore.collection('users', ref => ref.where('email', '==', mail)).snapshotChanges();
  }

  // Devuelve un usuario por su id.
  getUser(userID: string) {
    return this.firestore.collection('users', ref => ref.where('uid', '==', userID)).snapshotChanges();
  }

  // Cambia la información introducida del usuario.
  UpdateUser(data){
    const user = this.afAuth.auth.currentUser;
    this.firestore.collection('users').doc(user.uid).update(data);
  }

  // Devuelve si está loggeado o no un usuario.
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  // Cambiar la contraseña
  ChangePassword(newPassword: string){
    const user = this.afAuth.auth.currentUser;
    user.updatePassword(newPassword);
    this.router.navigate(['signin']);
  }

  // Elimina un usuario.
  DeleteUser(){
    const user = this.afAuth.auth.currentUser;
    user.delete();
    this.firestore.collection('users').doc(user.uid).delete();
    this.router.navigate(['signin']);
  }

  ChangePhoto(urlImage: string){
    const user = this.afAuth.auth.currentUser;
    const newThings = {
      photoURL: urlImage
    };
    this.afAuth.auth.onAuthStateChanged(function(user) {
      user.updateProfile(newThings);
    });
    this.firestore.collection('users').doc(user.uid).update({
      photoURL: urlImage
    });
  }
}
