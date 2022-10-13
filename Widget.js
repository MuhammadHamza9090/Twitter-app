import "./TwitterFrontpage.css";
import { FaSearch } from "react-icons/fa";
import "./App.css";

import { BiDotsHorizontal } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { ref, child, get, getDatabase, set, db } from "./Firebase";

function Widget({ image }) {
  const [s, d] = useState(0);
  const t = localStorage.getItem("User");
  
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Users/${t}`)).then((snapshot) => {
    /*-Start---User Data get in consol-*/
    var j = snapshot.val();

    j.img.push(image);
    var tt = j.img.indexOf(image);
    
    if (tt == 1) {
      if (j.img[2] !== image) {
        set(ref(db, `Users/${t}`), j);
      }
    }

    // console.log(k.img.indexOf(image));

    // if(j[5].indexOf(image)!=-1){
    // console.log("Not Present");
    // k.img.push(image);

    // d(0);

    // }
    // console.log(k);

    // if(j.img[1] && j.img[1]===""){
    //   console.log("Present");
    // }
    // else{
    //   console.log("Not Present");
    //   j.img.push(image)
    // }

    // if(j.img[0]===""){
    //   console.log("y");
    //   j.img.push(image);
    //   if(j.img[1]===""){
    //     console.log("set");

    //   }
    //   else{
    //     console.log("repeat");
    //   }
    // }
    // console.log(j);

    // j.img.map((e,index)=>{
    //   if(e===""){
    //     console.log(index,"Empty");
    //     j.img.pop()
    //   }
    //   else if(e===image){
    //   console.log("present");
    //   }
    //   else{
    //     i.img.push(image);
    //   }

    // })

    // j.img.map((e)=>{
    // if(e===""){
    //   console.log("Yes");
    //   j.img.push(image);
    // }else{
    //   console.log("No");
    // }
    // })
  });
  // });

  const q = {
    color: "black",
    fontWeight: "bold",
    padding: "10px 20px",
    textAlign: "left",
  };
  return (
    <>
      <header style={{ position: "absolute", right: "50px", width: "30%" }}>
        <div
          style={{
            position: "fixed",
            padding: "20px 0",
            width: "31%",
            top: "0",
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            borderRadius: "100px",
            marginTop: "0.5%",
          }}
        >
          <div
            style={{
              border: "none",
              borderRadius: "100px",
              padding: "1px 0",
              backgroundColor: "white",
            }}
          >
            <span
              style={{ color: "gray", padding: "6px 40px", fontSize: "22px" }}
            >
              <FaSearch />
            </span>
            <input
              type="text"
              style={{
                border: "none",
                width: "500px",
                marginLeft: "10px",
                background: "none",
                outline: "none",
                fontSize: "22px",
              }}
              placeholder="Search twitter"
            />
          </div>
        </div>

        <div
          className="widget-container"
          style={{
            marginTop: "18%",
            textAlign: "center",
            border: "none",
            borderRadius: "20px",
            backgroundColor: "white",
            width:"625px",
            height: "800px",
          }}
        >
          <p style={q}>
            <h3>
              <b>Trends For You</b>
            </h3>
          </p>

          <div
            style={{ borderRadius: "10px", textAlign: "left" }}
            className="Islamabad"
          >
            <p
              style={{
                height: "30px",
                color: "gray",
                fontSize: "20px",
                padding: "20px",
              }}
            >
              Trending in pakistan{" "}
              <span
                style={{ fontSize: "20px", width: "50%", textAlign: "right" }}
              >
                {<BiDotsHorizontal />}
              </span>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              <b> #Islamabad </b>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              15.9k Tweets
            </p>
          </div>

          <div style={{ borderRadius: "10px", textAlign: "left" }}
           className="Lahore"
          >
            <p
              style={{
                height: "20px",
                color: "gray",
                fontSize: "20px",
                padding: "20px",
              }}
            >
              Trending in pakistan{" "}
              <span
                style={{ fontSize: "20px", width: "50%", textAlign: "right" }}
              >
                {<BiDotsHorizontal />}
              </span>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              <b> #Lahore </b>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              15.9k Tweets
            </p>
          </div>

          <div style={{ borderRadius: "10px", textAlign: "left" }}
           className="Multan"
          >
            <p
              style={{
                height: "20px",
                color: "gray",
                fontSize: "20px",
                padding: "20px",
              }}
            >
              Trending in pakistan{" "}
              <span
                style={{ fontSize: "20px", black: "50%", textAlign: "right" }}
              >
                {<BiDotsHorizontal />}
              </span>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              <b> #Multan </b>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              15.9k Tweets
            </p>
          </div>

          <div style={{ borderRadius: "10px", textAlign: "left" }}
           className="Karachi"
          >
            <p
              style={{
                height: "20px",
                color: "gray",
                fontSize: "20px",
                padding: "20px",
              }}
            >
              Trending in pakistan{" "}
              <span
                style={{ fontSize: "20px", width: "50%", textAlign: "right" }}
              >
                {<BiDotsHorizontal />}
              </span>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              <b> #Karachi </b>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              15.9k Tweets
            </p>
          </div>

          <div style={{ borderRadius: "10px", textAlign: "left" }}
           className="Kashmir"
          >
            <p
              style={{
                height: "20px",
                color: "gray",
                fontSize: "20px",
                padding: "20px",
              }}
            >
              Trending in pakistan{" "}
              <span
                style={{ fontSize: "20px", width: "50%", textAlign: "right" }}
              >
                {<BiDotsHorizontal />}
              </span>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              <b> #Kashmir </b>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              15.9k Tweets
            </p>
          </div>
          {/* <div style={{ borderRadius: "10px", textAlign: "left" }}
           className="Aptabaad"
          >
            <p
              style={{
                height: "20px",
                color: "gray",
                fontSize: "20px",
                padding: "20px",
              }}
            >
              Trending in pakistan{" "}
              <span
                style={{ fontSize: "20px", width: "50%", textAlign: "right" }}
              >
                {<BiDotsHorizontal />}
              </span>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              <b> #Aptabaad </b>
            </p>
            <p style={{ color: "black", paddingLeft: "20px", height: "20px" }}>
              15.9k Tweets
            </p>
          </div> */}

          {/* <span style={{padding:"5px 10px"}}><img src="https://picsum.photos/200/300/?blur" alt="" style={{borderRadius:"100%",width:"50px",height:"50px"}}/></span> */}
          {/* <span style={{color:"black",fontWeight:"bold",paddingLeft:"5px"}}>FullName</span>
        <span style={{color:"black",display:"block",paddingTop:"-20px"}}>@Name</span> */}

          {/* <p style={{color:"black",paddingTop:"15px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Pariatur maxime obcaecati illum fuga veniam dolore molestiae
           quos veritatis excepturi voluptatem nobis, 
          iusto explicabo saepe ipsum dolorum, voluptatum quia. Blan</p> */}
          {/* <img src="https://picsum.photos/200/300/?blur" alt="" style={{width:"100%",height:"200px",borderRadius:"10px"}} /> */}
        </div>
      </header>
    </>
  );
}
export default Widget;

// var u=k.img.indexOf(image);
// console.log(u);
// k.img.push(image);

// if(k.img.indexOf(image)==0){
//   set(ref(db, `Users/${t}`),
//   k
// );
// }
// console.log(k.img);
