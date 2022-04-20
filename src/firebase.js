import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDiVbV74wIueB1QiQVrwIyyIKgtgnRUy0Q",
    authDomain: "cloning-97057.firebaseapp.com",
    projectId: "cloning-97057",
    storageBucket: "cloning-97057.appspot.com",
    messagingSenderId: "914627653472",
    appId: "1:914627653472:web:865efd13a69ccc3250b805",
    measurementId: "G-BGCBXKK5Z9"
});

const auth = firebase.auth();

export { auth };