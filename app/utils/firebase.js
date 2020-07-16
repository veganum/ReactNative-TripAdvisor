import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7ygL1n7F1oeqb2vx38W2fGUafJJmDUis",
  authDomain: "tenedores-360b5.firebaseapp.com",
  databaseURL: "https://tenedores-360b5.firebaseio.com",
  projectId: "tenedores-360b5",
  storageBucket: "tenedores-360b5.appspot.com",
  messagingSenderId: "716301539455",
  appId: "1:716301539455:web:bc5049c1cf387d3b06c74a",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
