
import firebase from 'firebase';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyB7jexNL-0D-nCMDLQHEwmpkg4gqLSoIXg",
    authDomain: "miti-nwpa.firebaseapp.com",
    databaseURL: "https://miti-nwpa.firebaseio.com",
    projectId: "miti-nwpa",
    storageBucket: "miti-nwpa.appspot.com",
    messagingSenderId: "10925300068"
  };
  firebase.initializeApp(config);

  export default firebase;
