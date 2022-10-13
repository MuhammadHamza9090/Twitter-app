import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import {auth,app} from './Firebase';
import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Login(){


const [email,setemail]=useState('');
const [password,setpassword]=useState();






  let nav=useNavigate();



   function mylogin(e){
    e.preventDefault(); 

  
   const mailformat=/^[A-Za-z0-9]{3,}@[A-Za-z]{4,}[.]{1}[com]{3,3}$/

      if(email===""  || password===""){
        alert("You must have to fill input fields");
      }
      else{
       
        if(email.match(mailformat)){
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('User',user.uid.toString());
            

             
                   console.log(email);
                 console.log(password);

            nav("/Home");
      
            console.log("Login Successfull");
             
           
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert("User Not Found ");
            
            
          
   console.log(email);
   console.log(password);

          })


          


        }
        else{
       alert("Your email Format Should be Example@gmail.com");
        }

      }
       
}
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control form-control-lg"
                        value={email}  onChange={(e)=>{setemail(e.target.value)}}
                        placeholder="Email"
                        required="required"
                      />

                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control form-control-lg"
                         value={password}  onChange={(e)=>{setpassword(e.target.value)}}
                        placeholder="Password"
                        required="required"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={mylogin}
                      style={{ color: "white" }}>
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?
                      <a href="#" className="text-white-50 fw-bold">
                      <span>
                          <Link to="/signup">Sign up</Link>
                            </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
