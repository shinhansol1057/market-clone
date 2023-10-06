import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY ,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DB_URL,
  projectId: import.meta.env.VITE_PR_ID,
  storageBucket: import.meta.env.VITE_SB,
  messagingSenderId: import.meta.env.VITE_MESSAGEING_SI,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app)
