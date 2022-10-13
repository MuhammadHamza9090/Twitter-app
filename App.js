import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Profile from "./Profile";
import Mydata from "./Mydata";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/Mydata" element={<Mydata />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
