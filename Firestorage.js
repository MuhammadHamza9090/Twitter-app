import {getStorage,uploadBytes,getDownloadURL,ref,listAll} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js"
import {app} from './Firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDhV258Fh8k-Q3EZLS3BN5jUzsbD_y1-6U",
  authDomain: "reactfirebasetwitterwebsite.firebaseapp.com",
  databaseURL:"https://reactfirebasetwitterwebsite-default-rtdb.firebaseio.com",
  projectId: "reactfirebasetwitterwebsite",
  storageBucket: "reactfirebasetwitterwebsite.appspot.com",
  messagingSenderId: "879655410434",
  appId: "1:879655410434:web:20b8ea64da6bdc2507401b",
};
 

  const storage = getStorage(app);
  

export {storage,ref,uploadBytes,listAll,getDownloadURL}

