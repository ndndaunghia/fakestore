// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq551sp_8tEzu-aKprqtNR8IYuHp1oepg",
  authDomain: "fakestore-781c2.firebaseapp.com",
  projectId: "fakestore-781c2",
  storageBucket: "fakestore-781c2.appspot.com",
  messagingSenderId: "642390947204",
  appId: "1:642390947204:web:1955c89723c8b6de4f59d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const firebaseAppPromise = Promise.resolve(app);
export { database };
export default app;