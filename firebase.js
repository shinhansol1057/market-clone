import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "AIzaSyBwKWOVjnRICDB3IqJydJXuIdzu4P3-00c",
  authDomain: "carrot-supercoding.firebaseapp.com",
  databaseURL: "https://carrot-supercoding-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-supercoding",
  storageBucket: "carrot-supercoding.appspot.com",
  messagingSenderId: "259493841875",
  appId: "1:259493841875:web:eeba0aae6f376365767d26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app)
