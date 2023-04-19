import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBq3aZrcVQ_9jTNDiQRAOc3G4CEPghWGEs",
    authDomain: "complaint-forum-45f98.firebaseapp.com",
    projectId: "complaint-forum-45f98",
    storageBucket: "complaint-forum-45f98.appspot.com",
    messagingSenderId: "371913432355",
    appId: "1:371913432355:web:e09ba79159801fe0f5c096"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
