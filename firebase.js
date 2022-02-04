import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDAkZurf_N4zye9j7upHz8k69GKbdgGih8",
    authDomain: "rasbook-30cd4.firebaseapp.com",
    projectId: "rasbook-30cd4",
    storageBucket: "rasbook-30cd4.appspot.com",
    messagingSenderId: "1015235713535",
    appId: "1:1015235713535:web:4324525f0bce2d57ddefca"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};