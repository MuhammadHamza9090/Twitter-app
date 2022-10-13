import {set,db,push ,snapshot,ref,get,child,getDatabase} from './Firebase';
import Login from './Login';

var Firstname="";
var Lastname="";



  const d=localStorage.getItem('User');


      const dbRef = ref(getDatabase());
      get(child(dbRef, `Users/${d}`)).then((snapshot) => {  
          var username=Object.values(snapshot.val());
        //   console.log(username[0],username[1]);
        Firstname=username[0];
        Lastname=username[1];
      
        })
        
 export  {Firstname,Lastname }     