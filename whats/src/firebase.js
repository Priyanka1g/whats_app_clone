import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBoTRXipfKl9C5jQIWDpMMp24CeMzgHqqQ",
    authDomain: "whats-app-clone-9030e.firebaseapp.com",
    projectId: "whats-app-clone-9030e",
    storageBucket: "whats-app-clone-9030e.appspot.com",
    messagingSenderId: "757207134314",
    appId: "1:757207134314:web:fcde9a2b44ac4f413eda13",
    measurementId: "G-VLT4XCPMBZ",
  
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const database = firebaseApp.firestore()
  const Auth = firebase.auth()
  const provider = new firebase.auth.
  GoogleAuthProvider();
 
export {Auth, provider};
export default database

