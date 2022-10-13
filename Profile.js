import  {auth,app,ref,set,db,child,push, get,snapshot,getDatabase,signOut,storage} from  './Firebase'
import React,{useEffect,useState} from 'react';
import {listAll} from './Firestorage';
import Profilerender from './Profilerender';


function Profile(){
const [profile,setProfile]=useState([]);  /*This is for User Names*/
const [current,setcurrent]=useState("");

let localstorageid=localStorage.getItem('User');
useEffect(()=>{
    const dbRef = ref(getDatabase());  

    get(child(dbRef, `Users`)).then((snapshot)=>{  /*-Start---User Data get in consol-*/
   
    let o=Object.entries(snapshot.val());
  
  let b=snapshot.val();
  
  
  
    setProfile(o);
    
    o.map((currentuser,index)=>{
   if(currentuser[0]===localstorageid){
   setcurrent(currentuser);
  

   }
    });
    
    

});

},[]);




    return (
        <>
        {profile.map((user)=>{   /*----Curly breakit----*/    

       return (   
         <>
            {
            user[0]===localstorageid?null:
              <Profilerender 
                Firstname={user[1].FirstName} 
                Lastname={user[1].LastName}
                userid={user[0]}  
                Buttonusers={user}  
                presentuser={current}
                imag={user[1].img}

              />
            }
         </>

         );  


 }  /*--Curly breakit----*/
       
       )} 

  
       </>
    )
}

export default Profile;
