import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

import {
  getStorage,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js";

import {
  getDatabase,
  ref,
  set,
  push,
  child,
  get,
  snapshot,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhV258Fh8k-Q3EZLS3BN5jUzsbD_y1-6U",
  authDomain: "reactfirebasetwitterwebsite.firebaseapp.com",
  databaseURL:
    "https://reactfirebasetwitterwebsite-default-rtdb.firebaseio.com",
  projectId: "reactfirebasetwitterwebsite",
  storageBucket: "reactfirebasetwitterwebsite.appspot.com",
  messagingSenderId: "879655410434",
  appId: "1:879655410434:web:20b8ea64da6bdc2507401b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const storage = getStorage(app);

const db = getDatabase();

export {
  auth,
  app,
  ref,
  set,
  db,
  child,
  push,
  get,
  snapshot,
  getDatabase,
  signOut,
  storage,
  uploadBytes,
  getDownloadURL,
};
