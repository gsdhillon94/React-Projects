import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAbqtPhZ5Yn89IvLtpwOo48AxHobzQf14A",
  authDomain: "practice-blog-2cc2c.firebaseapp.com",
  databaseURL: "https://practice-blog-2cc2c.firebaseio.com",
  projectId: "practice-blog-2cc2c",
  storageBucket: "practice-blog-2cc2c.appspot.com",
  messagingSenderId: "933518080895",
  appId: "1:933518080895:web:aa069521c6d5a9e935384a",
  measurementId: "G-TF2FVC1FLY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
