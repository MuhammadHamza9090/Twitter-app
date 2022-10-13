import {
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
} from "./Firebase";

import React, { useState, useEffect } from "react";

function Profilerender({
  Firstname,
  Lastname,
  userid,
  Buttonusers,
  presentuser,
  imag,
}) {
  const loginuser = localStorage.getItem("User");
  const [pushfollowers, setpushfollowers] = useState([]);
  const [backgroundColor, setbackgroundColor] = useState("rgb(239, 243, 244");
  const [bg, setbg] = useState("rgb(239, 243, 244");
  const [z, r] = useState("");

  const main = { justifyContent: "center", display: "flex", margin: "20px 0" };
  const aftermain = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    width: "80%",
    borderRadius: "2px",
    borderColor: "rgb(239, 243, 244)",
    backgroundColor: "lightgray",
    borderRadius: "100px",
  };
  const h1 = { color: "black" };
  const btn = { borderRadius: "10px", height: "40px", margin: "0px 10px" };
  const btn2 = { borderRadius: "10px", height: "40px" };

  var stoageid = localStorage.getItem("User");

  var h = presentuser;
  var k = h[0];

  function follow() {
    if (Buttonusers[1].followers[1] !== k) {
      alert("Successfully Follow");
      setbackgroundColor("Lightblue");
      setbg("rgb(239, 243, 244");

      presentuser[1].following.push(userid);

      Buttonusers[1].followers.push(presentuser[0]);

      set(ref(db, `Users/${presentuser[0]}`), presentuser[1]);

      set(ref(db, `Users/${Buttonusers[0]}`), Buttonusers[1]);
    } else {
      alert("Not Allow");
    }
  }

  function unfollow() {
    if (Buttonusers[1].followers[1] === k) {
      alert("Yes Unfollow Successfully");
      setbackgroundColor("Lightgray");
      setbg("lightblue");

      presentuser[1].following.map((e, key) => {
        if (userid === e) {
          var Q = e;

          presentuser[1].following.splice(key, 1);
          Buttonusers[1].followers.pop(presentuser[0]);

          set(ref(db, `Users/${presentuser[0]}`), presentuser[1]);

          set(ref(db, `Users/${Buttonusers[0]}`), Buttonusers[1]);
        }
      });
    } else {
      alert("You first have to Follow this User");
    }
  }

  return (
    <>
      <div style={main}>
        <div style={aftermain}>
          <img
            src={imag[1]}
            alt=""
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "100px",
              marginRight: "30px",
            }}
          />

          <h1 style={h1}>
            {Firstname} {Lastname}
          </h1>
          <button
            type="button"
            style={{
              backgroundColor,
              borderRadius: "10px",
              height: "40px",
              margin: "0px 10px",
            }}
            onClick={follow}
          >
            Follow
          </button>
          <button
            type="button"
            style={{
              backgroundColor: bg,
              borderRadius: "10px",
              height: "40px",
            }}
            onClick={unfollow}
          >
            UnFollow
          </button>
        </div>
      </div>
    </>
  );
}

export default Profilerender;

/*---------------------------------------------------------------------------------*/

// for(var i=1;i<=presentuser.length;i++){
//   if(a[i]===presentuser[1].following[i] ){
//  a[i+1]=userid;
//   continue;
//  }
//  else{
//   a[i+1]=userid;

//    presentuser[1].following.push(userid);
//    Buttonusers[1].followers.push(presentuser[0])
//    console.log(presentuser);
//  }
// console.log(presentuser[1].following[i]);

//  }

/*------------------------------------------------------------------------------*/

// var a=new Array();
//   presentuser[1].following.map((e,index)=>{
//   a[index]=e;
//   // console.log(e);
//   });

// function unfollow(){
//   for(var i=1;i<presentuser.length;i++){
//     if(a[i]!==userid){
//      // alert(userid);
//      presentuser[1].following.pop(userid);
//      Buttonusers[1].followers.pop(presentuser[0])
//      console.log(presentuser);
//    }

//    }
// }

/*---------------------------------------------------------------------------------------------*/
// function se pehlay
// const imageListRef=ref(storage,`image`);
// useEffect(()=>{
// y(g);

// },[]);

//after function follow k ander

//   useEffect(()=>{
//     listAll(imageListRef).then((response)=>{
//       response.prefixes.forEach((item)=>{
//     });
//     });
//  },[]) ;

/*---------------------------------------------------------------------------------------------*/
