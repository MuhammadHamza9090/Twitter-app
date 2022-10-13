import { useEffect, useState } from "react";
import {
  FaShieldAlt,
  FaHeart,
  FaRocketchat,
  FaThumbsUp,
  FaRegShareSquare,
} from "react-icons/fa";
import { ref, child, get, getDatabase, set, db } from "./Firebase";

function CurrentuserfollowingTweets({
  Tempo,
  Fname,
  Lname,
  Timage,
  obj,
  ke,
  Date,
  Time,
  followkitweets,
  Postimg,
}) {
  const [followkitweet, setfollowkitweet] = useState([]);
  const [key, setkey] = useState([]);
  const [likevalue, setlikevalue] = useState(1);

  useEffect(() => {
    let array = new Array();
    array = Object.keys(followkitweets[1]);

    Object.values(followkitweets[1]).map((e, index) => {
      e.key = array[index];
    });

    var p = Object.values(followkitweets[1]);

    setkey(followkitweets);
    setfollowkitweet(Object.values(followkitweets[1]));
  }, [followkitweets]);

  function like(e) {
    var link = followkitweets[0];
    var t = e.key;

    var loclstrag = localStorage.getItem("User");

    if (e.likes.indexOf(loclstrag) == -1) {
      e.likes.push(loclstrag);
      set(ref(db, `Tweets/${link}/${t}`), e);
    } else {
      e.likes.map((a, index) => {
        if (a === loclstrag) {
          e.likes.splice(index, 1);
          set(ref(db, `Tweets/${link}/${t}`), e);
        }
      });
    }

    console.log("e", followkitweets);
  }

  return (
    <>
      {Object.entries(followkitweets[1]).map((e) => {
        return (
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
                  src={e[1].img}
                  style={{
                    borderRadius: "100px",
                    height: "60px",
                    width: "60px",
                  }}
                  alt="userProfile"
                />
                <b style={{ padding: "2px 10px" }}>
                  {e[1].FirstName + e[1].LastName}
                </b>
                <FaShieldAlt />
                <span style={{ marginLeft: "40px", fontSize: "20px" }}>
                  {e[1].Date}
                </span>
                <span style={{ marginLeft: "20px", fontSize: "20px" }}>
                  {e[1].Time}
                </span>
                <p
                  style={{
                    color: "black",
                    borderColor: "rgb(239, 243, 244)",
                    paddingTop: "20px",
                  }}
                >
                  {e[1].Text}
                </p>
              </p>

              <div style={{ padding: "10px 0" }}>
                {" "}
                <img
                  src={e[1].img}
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
                  <span style={{ margin: "0 5px" }}>
                    Like{e[1].likes.length}
                  </span>

                  <button
                    type="button"
                    style={{
                      border: "none",
                      color: "black",
                      background: "none",
                    }}
                    onClick={() => like(e[1])}
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
        );
      })}
    </>
  );
}

export default CurrentuserfollowingTweets;
// {Fname + Lname}
// Date
// Time
// {Tempo}
// src={Timage}
