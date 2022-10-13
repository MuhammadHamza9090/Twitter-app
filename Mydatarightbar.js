import React from "react";

const Mydatarightbar = () => {
  return (
    <div>
      <div style={{ maxWidth: "850px", margin: "0px auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "18px 0px",
            borderBottom: "1px solid grey",
          }}
        >
          <div>
            <img
              style={{ width: "200px", height: "200px", borderRadius: "100px" }}
              src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <h1>Muhammad Hamza</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <h3>40 posts</h3>
              <h3>40 followers</h3>
              <h3>40 following</h3>
            </div>
          </div>
        </div>

        <div className="gallery">
          <img
            className="item"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className="item"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className="item"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className="item"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className="item"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className="item"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
    </div>
  );
};

export default Mydatarightbar;
