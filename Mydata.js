import React from "react";
import Mydatarightbar from "./Mydatarightbar";
import Mydatasidebar from "./Mydatasidebar";

const Mydata = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Mydatasidebar />
        <Mydatarightbar />
      </div>
    </>
  );
};

export default Mydata;
