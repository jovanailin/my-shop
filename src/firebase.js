import firebase from "firebase"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCOE4jU9708RFxlaZMCFOksHiCoxuBifGE",
    authDomain: "my-shop-c9e0b.firebaseapp.com",
    databaseURL: "https://my-shop-c9e0b.firebaseio.com",
    projectId: "my-shop-c9e0b",
    storageBucket: "my-shop-c9e0b.appspot.com",
    messagingSenderId: "186664613165",
    appId: "1:186664613165:web:6811dc50a58234ffda8fa4",
    measurementId: "G-E96J7VTYDY"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  


export default firebase
