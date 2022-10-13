import "./TwitterFrontpage.css";
import TweetsBox from "./TweetsBox";
import Post from "./Post";
import "./Signup.css";
import React, { useState, useEffect } from "react";
import { ref, child, get, getDatabase, set, db } from "./Firebase";
import File from "./File";
import CurrentuserfollowingTweets from "./CurrentuserfollowingTweets";
function Feeds({ image }) {
  const t = localStorage.getItem("User");
  const s = localStorage.getItem("User");
  const [array, setarray] = useState([]);
  const [q, setq] = useState(t);
  const [post, setpost] = useState([]);
  const [currentuserfollowing, setcurrentuserfollowing] = useState([""]);
  const [a, b] = useState(); /*Username*/
  const [c, d] = useState(); /*Email*/
  const [e, f] = useState(); /*tweets */
  const [firstName, setFirstName] = useState(""); /*tweets */
  const [lastName, setLastName] = useState(""); /*tweets */

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Users/${t}`)).then((snapshot) => {
      var username = Object.values(snapshot.val());
      setFirstName(username[0]);
      setLastName(username[1]);
      /*-Start---User Data get in consol-*/

      var gg = Object.values(snapshot.val());
      setcurrentuserfollowing(gg[4]);

      get(child(dbRef, `Tweets/${t}`)).then((snapshot) => {
        /*-Start---User Data get in consol-*/
        var o = Object.values(snapshot.val());
        // console.log(o[0].img);
        setpost(o);
      });

      get(child(dbRef, `Tweets`)).then((snapshot) => {
        /*-Start---User Data get in consol-*/
        var h = Object.entries(snapshot.val());

        setarray(h);
      });

      var k = snapshot.val();
      d(k.email);
      b(k.FirstName + k.LastName);
    });
  }, [t, s]);

  const header = {
    width: "42%",
    marginLeft: "20px",
    position: "relative",
    left: "450px",
    border: "0.01px solid gray",
    borderColor: "rgb(239, 243, 244)",
  };

  const h1 = {
    color: "black",
    width: "41.8%",
    padding: "10px 24px",
    position: "fixed",
    top: "0",
    zIndex: "100",
    backdropFilter: "blur(12px)",
    backgroundColor: "whitesmoke",
  };

  return (
    <>
      <header style={header}>
        <div
          className="d"
          style={{
            height: "350px",
            padding: "1px 0px",
            width: "100%",
            borderRadius: "2px",
            boxShadow: "0.5px 0.5px 0.5px 0.5px lightgray",
            borderColor: "rgb(239, 243, 244)",
          }}
        >
          <div style={{ position: "relative" }}>
            <h4 style={h1}>HOME</h4>
          </div>

          <div style={{ height: "250px" }}>
            <File />

            <TweetsBox
              timg={image}
              tid={q}
              firstN={firstName}
              lastN={lastName}
            />
          </div>
        </div>

        <div style={{ height: "50px" }}></div>

        {post.map((e) => {
          return (
            <Post
              img={e.img}
              tweetsprofile={image}
              date={e.Date}
              time={e.Time}
              displayName={a}
              Username={c}
              text={e.Text}
              uiid={q}
            />
          );
        })}

        {array.map((e) => {
          console.log(e);
          console.log("currentuserfollowing", currentuserfollowing);
          if (currentuserfollowing.indexOf(e[0]) != -1) {
            return (
              <CurrentuserfollowingTweets
                Tempo={Object.values(e[1])[0].Text}
                Fname={Object.values(e[1])[0].FirstName}
                Lname={Object.values(e[1])[0].LastName}
                Timage={Object.values(e[1])[0].img}
                follwingprofile={Object.values(e[1])[0].image}
                Date={Object.values(e[1])[0].Date}
                Time={Object.values(e[1])[0].Time}
                obj={e[0]}
                ke={e[1]}
                followkitweets={e}
              />
            );
          }
        })}
      </header>
    </>
  );
}

export default Feeds;

// console.log(rr[index]);
//  const u= Object.values(e[1])
//  setmatchuserstweets[index]=u[0];
// console.log(u[0]);
// Object.values(e[1])[0].Text
// rr[index]=Object.values(e[1])[0];
// setmatchuserstweets(rr[index]);
// console.log(rr[index]);
// r[index]=rr[index];

{
  /* {currentuserfollowing.map((l)=>{
          
          array.map((e,index)=>{
             if(l==e[0]){
             console.log(e);
             } 
          });

             
          })}  */
}

//   e.map((r)=>{
//  console.log(r.Text);
//   })

// {

// array.map((e,index)=>{
//   return(
// <CurrentuserfollowingTweets  tempo={e}/>);
// console.log(e[0]);

// })

// }
