import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCA412qCla7MrgeV_R236sDwoXBwiJIzcM",
    authDomain: "project-plan-f444a.firebaseapp.com",
    databaseURL: "https://project-plan-f444a.firebaseio.com",
    projectId: "project-plan-f444a",
    storageBucket: "project-plan-f444a.appspot.com",
    messagingSenderId: "996209299630",
    appId: "1:996209299630:web:c479776aebd387fefd1d3f",
    measurementId: "G-RSR7HKHM03"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase