import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOQGdUZYSQ5Na7GBsrmQEmyPImBRzraa8",
  authDomain: "twitterclone-49037.firebaseapp.com",
  projectId: "twitterclone-49037",
  storageBucket: "twitterclone-49037.appspot.com",
  messagingSenderId: "19522966031",
  appId: "1:19522966031:web:0a1d5e2307a017f15d497a",
};

export default firebase.initializeApp(firebaseConfig);
