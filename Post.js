import {
  FaShieldAlt,
  FaHeart,
  FaRocketchat,
  FaThumbsUp,
  FaRegShareSquare,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { ref, push, db, child, get, getDatabase } from "./Firebase";
import { BsTranslate } from "react-icons/bs";

function Post({
  displayName,
  Username,
  img,
  text,
  uiid,
  tweetsprofile,
  date,
  time,
}) {
  var d = localStorage.getItem("User");
  const [count, setcount] = useState(0);
  

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Likes/${d}`)).then((snapshot) => {
      var o = Object.values(snapshot.val());

      console.log(o);
      o.map((e) => {
        setcount(e.Likes);
      });
    });
  }, []);

  return (
    <>
      <div
        className="post"
        style={{
          marginTop: "20%",
          width: "100.5%",
          marginLeft: "-1px",
          zIndex: "-1",
          border: "1.3px ridge",
          borderColor: "rgb(239, 243, 244)",
          borderBottom: "none",
        }}
      >
        <div className="post-avator">
          <p style={{ color: "black", padding: "12px 10px" }}>
            <img
              src={tweetsprofile}
              style={{ borderRadius: "100px", height: "60px", width: "60px" }}
              alt="userProfile"
            />
            <b style={{ padding: "2px 10px", color: "black  " }}>{Username}</b>
            <FaShieldAlt />
            <span style={{ padding: "2px 10px", color: "black" }}></span>
            <span
              style={{
                fontSize: "20px",
                marginLeft: "30px",
                width: "100%",
                color: "black ",
                // border: "2px solid red",
              }}
            >
              {date}
            </span>
            <span
              style={{
                fontSize: "20px",
                paddingLeft: "20px",
                color: "black",
                // border: "2px solid red",
              }}
            >
              {time}
            </span>

            <p
              style={{
                color: "black",
                borderColor: "rgb(239, 243, 244)",
                paddingTop: "20px",
                // border: "2px solid red",
              }}
            >
              {text}
            </p>
          </p>

          <div style={{ padding: "5px 0" }}>
            {" "}
            <img
              src={img}
              alt=""
              style={{
                height: "350px",
                width: "100%",
                padding: "0 10px",
                borderRadius: "15px",
              }}
            />{" "}
          </div>

          <div
            className="icons"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "93%",
              marginLeft: "15px",
            }}
          >
            <h1 style={{ color: "black", fontSize: "20px" }}>
              <FaHeart />
            </h1>
            <h1 style={{ color: "black", fontSize: "20px" }}>
              <FaRocketchat />
            </h1>
            <h1
              style={{
                color: "black",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ margin: "0 5px" }}>Like {1}</span>

              <button
                type="button"
                  style={{
                  border: "none",
                  color: "black",
                }}
              >
                <FaThumbsUp />
              </button>
            </h1>
            <h1
              style={{
                color: "black",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ margin: "0 5px" }}>share</span>{" "}
              <FaRegShareSquare />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
