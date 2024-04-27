// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn8u5cx-0fs5BukKmXLpyg_wz35xRd5-c",
  authDomain: "heyshop-9658b.firebaseapp.com",
  projectId: "heyshop-9658b",
  storageBucket: "heyshop-9658b.appspot.com",
  messagingSenderId: "927790003216",
  appId: "1:927790003216:web:b8df14e480907a1d208695",
  measurementId: "G-9B3J6D6R0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();