import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaf9jr_0WrVtyh7XiKDC2mUT57ybZm-p0",
  authDomain: "facebook-clone-5a353.firebaseapp.com",
  projectId: "facebook-clone-5a353",
  storageBucket: "facebook-clone-5a353.appspot.com",
  messagingSenderId: "265083529340",
  appId: "1:265083529340:web:50e6ec5f7743b72ec501f9",
  measurementId: "G-73MJJCKQL1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
