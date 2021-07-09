import  firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
    apiKey: "AIzaSyBRhVpQ-tRWxqBn_ABKG9afwQHADsuT-uo",
    authDomain: "foodstore---coderhouse.firebaseapp.com",
    projectId: "foodstore---coderhouse",
    storageBucket: "foodstore---coderhouse.appspot.com",
    messagingSenderId: "746372343666",
    appId: "1:746372343666:web:754c411dddd1fe3250dfeb",
    measurementId: "G-QH1R2JQ1PP"
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}