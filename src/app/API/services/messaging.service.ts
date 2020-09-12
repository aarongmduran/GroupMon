import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class MessagingService {

  // Lleva el mensaje actual 
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe((_messaging) => {
     _messaging.onMessage = _messaging.onMessage.bind(_messaging);
     _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    })
  }

  // Pide permiso para mandar notificaciones.
  requestPermission(){
    this.angularFireMessaging.requestToken.subscribe((token) => {
      console.log(token);
    }, (err) => {
      console.error('Unable to get permission to notify.', err);
    });
  }

  // Recibe las notificaciones. 
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe((payload) => {
      console.log("new message received. ", payload);
      this.currentMessage.next(payload);})
  }
}