import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance'
// import 'firebase/firestore';

const firebaseConfig = { // create config
    apiKey: "AIzaSyBAk0XbcAVEaNON640xO2Y0VYkvTkwpdMI",
    authDomain: "hvtech-resources.firebaseapp.com",
    projectId: "hvtech-resources",
    storageBucket: "hvtech-resources.appspot.com",
    messagingSenderId: "940155333710",
    appId: "1:940155333710:web:051b4d5f7c64c77030271f",
    measurementId: "G-1FSM83J254"
};

if (!firebase.apps.length) { // check if firebase has been initliazed already to prevent errors
    firebase.initializeApp(firebaseConfig);
}
