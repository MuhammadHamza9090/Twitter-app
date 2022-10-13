import React from "react";
import "./App.css";
import { BsJustify, BsTwitter } from "react-icons/bs";
import Sidebaroption from "./Sidebaroption";
import {
  BiHome,
  BiHash,
  BiBell,
  BiMessageRounded,
  BiBookmark,
  BiMenuAltLeft,
  BiFemale,
  BiDotsHorizontal,
} from "react-icons/bi";
import "./TwitterFrontpage.css";
import { BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import Profile from "./Profile";

import { signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

function Sidebar() {
  let navigate = useNavigate();

  function mydata() {
    navigate("./Mydata");
  }

  /*-----Css----*/
  const span = {
    color: "black",
    fontWeight: "bold",
    fontSize: "20px",
    paddingBottom: "10px",
    paddingLeft: "10px",
  };
  const bstwitter = {
    paddingBottom: "16px",
    fontSize: "20px",
    color: "blue  ",
    height: "60px",
    width: "100px",
  };
  const btn = {
    borderRadius: "110px",
    padding: "10px 90px",
    backgroundColor: "lightblue",
    border: "1px solid lightblue",
    color: "white",
  };
  const sidebaroption = {
    padding: "10px 10px",
    display: "block",
  };
  const profil = {
    borderRadius: "100px",
    padding: "5px 25px",
    border: "none",
    background: "none",
    fontFamily: "verdana",
    fontSize: "20px",
    color: "black",
  };

  const maindiv = {
    padding: "10px 0px",
    border: "1px solid whitesomke ",
    paddingLeft: "50px",
    paddingRight: "150px",
    height: "100vh",
  };
  /*-----Css----*/

  function sigout() {
    console.log("dsd");

    signOut(auth).then(function () {
      localStorage.setItem("User", "");
      navigate("/Login");
      console.log("Logged Out");
    });
  }

  function profile() {
    navigate("/Profile");
  }

  return (
    <>
      <header style={{ padding: "10px", position: "fixed" }}>
        <div className="sidebar" style={maindiv}>
          <BsTwitter style={bstwitter} />

          <div style={sidebaroption}>
            <Sidebaroption icon={<BiHome />} text="Home" />
            <Sidebaroption icon={<BiHash />} text="Explore" />
            <Sidebaroption icon={<BiBell />} text="Notification" />
            <Sidebaroption icon={<BiMessageRounded />} text="Message" />
            <Sidebaroption icon={<BiBookmark />} text="BookMark" />
            <Sidebaroption icon={<BiMenuAltLeft />} text="List" />
            <button type="button" className="ProfileHover" onClick={profile}>
              {" "}
              <span style={{ fontSize: "38px" }}>{<BiFemale />}</span>{" "}
              <h6
                style={{
                  display: "inline-block",
                  fontSize: "30px",
                  color: "black",
                }}
              >
                Profile
              </h6>{" "}
            </button>
            <Sidebaroption icon={<BiDotsHorizontal />} text="More" />
            <button type="button" onClick={sigout} style={btn}>
              <h4>Signout</h4>
            </button>
            <div>
              <button className="mydata" onClick={mydata}>
                <h4>Muhammad Hamza</h4>
                <h5>@Muhammad74308...</h5>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Sidebar;
