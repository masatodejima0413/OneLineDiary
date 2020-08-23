import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDNrJv_2Kiv-uPb9vlhvjfs1Mgrh2W37mg",
  authDomain: "onelinediary-1596783105868.firebaseapp.com",
  databaseURL: "https://onelinediary-1596783105868.firebaseio.com",
  projectId: "onelinediary-1596783105868",
  storageBucket: "onelinediary-1596783105868.appspot.com",
  messagingSenderId: "1062013144652",
  appId: "1:1062013144652:web:4b36205b3e05d9a103eee9",
};
// Initialize Firebase
export default firebase.apps[0] || firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
