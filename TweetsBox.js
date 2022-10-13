// import { upload } from '@testing-library/user-event/dist/upload';
import { BsImage } from "react-icons/bs";
import { v4 } from "uuid";

import {
  storage,
  uploadBytes,
  getDownloadURL,
  ref as fir,
  listAll,
} from "./Firestorage";

import React, { useState, useEffect } from "react";
import {
  set,
  db,
  push,
  snapshot,
  ref as realtimeref,
  get,
  child,
  getDatabase,
} from "./Firebase";

function TweetsBox({ timg, tid, firstN, lastN }) {
  const [x, setx] = useState("");
  const [image, setimage] = useState(null);
  const [imglink, setimglink] = useState("");
  const [likes, setLisks] = useState([""]);

  const d = localStorage.getItem("User");
  const imageListRef = fir(storage, `Tweets/${d}`);

  // function getimageurl(){
  //   return ();
  // }

  function tweet() {
    if (x !== "") {
      const imageRef = fir(storage, `Tweets/${d}/${image.name + v4()}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setimglink(downloadURL);
          var date = new Date().toLocaleDateString();
          var time = new Date().toLocaleTimeString();
          push(realtimeref(db, `Tweets/${d}`), {
            Text: x,
            FirstName: firstN,
            LastName: lastN,
            img: downloadURL,

            Date: date,
            Time: time,
            likes,
          });
        });
      });

      console.log(imglink);

      //
    }
  }
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
      console.log("Yes");
    }
  };
  return (
    <>
      <div className="tweet" style={{ marginTop: "5%", padding: "0 10px" }}>
        <input
          type="text"
          placeholder="Your Tweet Box "
          value={x}
          onChange={(e) => setx(e.target.value)}
          style={{
            border: "none",
            background: "none",
            marginLeft: "20px",
            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          marginLeft: "10px",
          textAlign: "right",
          marginTop: "-45px",
          marginRight: "10px",
        }}
      >
        <button
          type="button"
          onClick={tweet}
          style={{
            borderRadius: "100px",
            backgroundColor: "lightblue",
            border: "none",
            padding: "10px 20px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Tweets
        </button>
      </div>

      <div style={{ marginTop: "2%", marginLeft: "40px", padding: "0 10px" }}>
        <label for="image">
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e) => handleChange(e)}
            style={{
              border: "1px solid red",
              height: "40px",
              width: "40px",
              opacity: "-10",
            }}
          />
        </label>

        <h3
          style={{
            color: "blue",
            zIndex: "-1",
            position: "relative",
            bottom: "50px",
          }}
        >
          {<BsImage />}
        </h3>
      </div>
    </>
  );
}

export default TweetsBox;

// const dbRef = databas(getDatabase());
// get(child(dbRef, `Users/${d}`)).then((snapshot) => {
//   var username = Object.values(snapshot.val());
//   console.log(username[0], username[1]);

// listAll(imageListRef).then((response) => {
//   // console.log(response);
//   response.items.forEach((item) => {
//     getDownloadURL(item).then((url) => {
//       setimgLink(url);
//       // console.log(imgLink);
//     });
//   });
// });
