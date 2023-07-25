
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCK4hgZsoeN42bh-K8KURjYYnTeGZTxRfI",
  authDomain: "myfinaldb-probablly.firebaseapp.com",
  projectId: "myfinaldb-probablly",
  storageBucket: "myfinaldb-probablly.appspot.com",
  messagingSenderId: "521359266977",
  appId: "1:521359266977:web:26afa4a7b4bbf730ab8ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

import { writable } from "svelte/store";

export const staticState = writable({

})

export const studentState = writable({

})

export const adminState = writable({

})
