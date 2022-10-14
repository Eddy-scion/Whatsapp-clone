import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK38oNCTOloHPPhk8_vBHo325FIdJprsU",
  authDomain: "whatsapp-clone-b62fc.firebaseapp.com",
  projectId: "whatsapp-clone-b62fc",
  storageBucket: "whatsapp-clone-b62fc.appspot.com",
  messagingSenderId: "1027095792012",
  appId: "1:1027095792012:web:d9ab84b2d248bd7c08aea9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
