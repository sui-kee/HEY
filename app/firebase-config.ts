import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

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
export const auth = getAuth(app)