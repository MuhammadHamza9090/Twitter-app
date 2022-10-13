import React,{ useState } from "react"


const Mydatasidebar = () => {

     const [name,setName] = useState('Muhammad Hamza');
     const [job,setJob] = useState('Developer'); 
     const [about,setAbout] = useState('ssssssssss');
    

      return (
       <div className="Card">
        <div className="upper-container">
         <div className="image-container">
          <img src=" " alt="" height="100px" width="100px" />
        </div>
      </div>
    <div className="lower-container">
         <h3> { name } </h3>
         <h4> { job } </h4>
         <p> { about } </p>
         <button>Visit Profile</button>
      </div>
    </div>
  )
}

export default Mydatasidebar;
