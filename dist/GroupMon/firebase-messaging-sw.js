importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');
  firebase.initializeApp({
    apiKey: "AIzaSyDX8nLqOq5S_CQbsi9IKdcILHgxXYENujc",
    authDomain: "groupmonapp.firebaseapp.com",
    databaseURL: "https://groupmonapp.firebaseio.com",
    projectId: "groupmonapp",
    storageBucket: "groupmonapp.appspot.com",
    messagingSenderId: "934048774448",
    appId: "1:934048774448:web:cad514305f80d4f11eb0f5"
});
  const messaging = firebase.messaging();