
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCDIfXjKdZ4fgNX78yqY86S94opJhgR1ZQ",
  authDomain: "ecommece-shop.firebaseapp.com",
  projectId: "ecommece-shop",
  storageBucket: "ecommece-shop.appspot.com",
  messagingSenderId: "65912446813",
  appId: "1:65912446813:web:f933c9ad5694038f9852b4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
