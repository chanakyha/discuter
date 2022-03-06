import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEibiq1yYcEhWaUSMqNVkGZR6wPmtohNE",
  authDomain: "discuter-da294.firebaseapp.com",
  projectId: "discuter-da294",
  storageBucket: "discuter-da294.appspot.com",
  messagingSenderId: "134081931107",
  appId: "1:134081931107:web:bfe2d569534ca5051e5556",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
