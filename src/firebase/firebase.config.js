import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDOpAfeNkvdVyuRnxbJ4lIXXTuJd-zlQH8",
//   authDomain: "bistro-boss-167fc.firebaseapp.com",
//   projectId: "bistro-boss-167fc",
//   storageBucket: "bistro-boss-167fc.appspot.com",
//   messagingSenderId: "559574502825",
//   appId: "1:559574502825:web:1bc9d48948299af67fc8b8"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);