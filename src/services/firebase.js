import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD49D389eTQRjSwLC30bHZ0uO0miOBMjfA",
  authDomain: "pitmark-7b555.firebaseapp.com",
  databaseURL: "https://pitmark-7b555.firebaseio.com",
  projectId: "pitmark-7b555",
  storageBucket: "pitmark-7b555.appspot.com",
  messagingSenderId: "286025846742",
  appId: "1:286025846742:web:79795c205c57863a899e77",
  measurementId: "G-8FB0C8PZCC"
};
firebase.initializeApp(firebaseConfig);

export default firebase;