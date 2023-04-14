// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth,
} from 'firebase/auth';
import {
  connectFunctionsEmulator,
  getFunctions,
} from 'firebase/functions';
import { env } from 'process';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2RMIteC7Ccauf3vQsUi2cbDxgg-9oYUo',
  authDomain: 'geekcamp-1f657.firebaseapp.com',
  projectId: 'geekcamp-1f657',
  storageBucket: 'geekcamp-1f657.appspot.com',
  messagingSenderId: '182701107708',
  appId: '1:182701107708:web:02996d4b76de3c0c1faa79',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');

export const functions = getFunctions(app);
connectFunctionsEmulator(functions, 'localhost', 5001);
