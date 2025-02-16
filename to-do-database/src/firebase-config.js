import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDb2CaImjZHl99ewJKDpPvhb6hFySvFr_g",
    authDomain: "to-do-withdatabase.firebaseapp.com",
    databaseURL: "https://to-do-withdatabase-default-rtdb.firebaseio.com",
    projectId: "to-do-withdatabase",
    storageBucket: "to-do-withdatabase.appspot.com",
    messagingSenderId: "110427066017",
    appId: "1:110427066017:web:42723a6b66a5a65f5faae0"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)