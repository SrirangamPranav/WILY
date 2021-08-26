import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDmz2v4TS8M6gOXNplnHKdB3Xfvo499u6w",
    authDomain: "wily-app-f742e.firebaseapp.com",
    projectId: "wily-app-f742e",
    storageBucket: "wily-app-f742e.appspot.com",
    messagingSenderId: "297916194428",
    appId: "1:297916194428:web:9b889b057074c7f7f033f9"
  };
   firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()