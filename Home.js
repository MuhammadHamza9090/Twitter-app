import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Feeds from "./Feeds";
import Widget from "./Widget";
import { useNavigate } from "react-router-dom";
import {
  storage,
  uploadBytes,
  getDownloadURL,
  ref,
  listAll,
} from "./Firestorage";

function Home() {
  const [imgLink, setimgLink] = useState("");

  let navigate = useNavigate();

  var b = localStorage.getItem("User");
  const imageListRef = ref(storage, `image/${b}`);

  useEffect(() => {
    if (b.length === 0) {
      navigate("/Login");
    }
  });

  /*------------------------------------*/
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimgLink(url);
          
        });
      });
    });
    
  }, [imageListRef]);

  /*--------------------------------------*/
  return (
    <>
      <div
        className="ap"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Sidebar />
        <Feeds image={imgLink} />
        <Widget image={imgLink} />
      </div>
    </>
  );
}
export default Home;
