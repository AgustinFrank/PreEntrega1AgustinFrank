import { initializeApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBy-7cNkG2mS3P5P4krMdvrpluyuPMf-vc",
  authDomain: "onlyfoot-49627.firebaseapp.com",
  projectId: "onlyfoot-49627",
  storageBucket: "onlyfoot-49627.appspot.com",
  messagingSenderId: "894625668104",
  appId: "1:894625668104:web:52705365db5d79bcde45bd"
};

const app = initializeApp(firebaseConfig);

 export const db = getFireStore(app)