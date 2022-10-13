import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { auth, ref, set, db } from "./Firebase";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { getStorage } from "firebase/storage";

function Signup() {
  let navigate = useNavigate();

  // const [followers, setfollowers] = useState([""]);
  // const [following, setfollowing] = useState([""]);
  // const [email, setemail] = useState("");
  // const [img, setimg] = useState([""]);
  // const [FirstName, setusername] = useState("");
  // const [password, setpassword] = useState("");
  // const [fullname, setfullname] = useState("");
  // const [contactno, setcontactno] = useState("");

  const [followers, setfollowers] = useState([""]);
  const [following, setfollowing] = useState([""]);
  const [FirstName, setFirstName] = useState("");
  const [img, setimg] = useState([""]);
  const [LastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState();
  const [c_password, setc_password] = useState();

  // function signup(e) {
  //   e.preventDefault();

  //   const contactnoformat = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  //   const mailformat = /^[A-Za-z0-9]{3,}@[A-Za-z]{4,}[.]{1}[com]{3,3}$/;

  //   if (
  //     email === "" ||
  //     fullname === "" ||
  //     password === "" ||
  //     FirstName === "" ||
  //     contactno === ""
  //   ) {
  //     alert("You must have to fill Boxed");
  //   } else {
  //     if (contactno.match(contactnoformat)) {
  //       if (email.match(mailformat)) {
  //         if (password) {
  //           createUserWithEmailAndPassword(auth, email, password)
  //             .then((userCredential) => {
  //               const user = userCredential.user;
  //               console.log("ssdsdsdsdd");

  //               set(ref(db, `Users/${user.uid}`), {
  //                 Email: email,
  //                 FirstName: FirstName,
  //                 password: password,
  //                 followers,
  //                 following,
  //                 img,
  //               });
  //               alert("Signup successfull");
  //               navigate("/Login");
  //             })
  //             .catch((error) => {
  //               const errorCode = error.code;
  //               const errorMessage = error.message;
  //               alert("User already have account");
  //             });
  //         } else {
  //           alert("password should be match with confirm password");
  //         }
  //       } else {
  //         alert("Your Email Should be example@gmail.com");
  //       }
  //     } else {
  //       alert("Your contact is wrong ");
  //     }
  //   }
  // }

  function signup(e) {
    e.preventDefault();

    const mailformat = /^[A-Za-z0-9]{3,}@[A-Za-z]{4,}[.]{1}[com]{3,3}$/;

    if (
      FirstName === "" ||
      LastName === "" ||
      email === "" ||
      password === "" ||
      c_password === ""
    ) {
      alert("You must have to fill Boxed");
    } else {
      if (email.match(mailformat)) {
        if (password === c_password) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("ssdsdsdsdd");

              set(ref(db, `Users/${user.uid}`), {
                FirstName: FirstName,
                LastName: LastName,
                email: email,
                followers,
                following,
                img,
              });
              alert("Signup successfull");
              navigate("/Login");

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert("User already have account");
            });
        } else {
          alert("password should be match with confirm password");
        }
      } else {
        alert("Your Email Should be example@gmail.com");
      }
    }
  }
  // console.log(FirstName);
  // console.log(LastName);
  // console.log(email);
  // console.log(password);
  // console.log(c_password);

  return (
    <>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-2">
                      Registertion
                    </h2>

                    <form>
                      <div className="form-outline mb-3">
                        {/* <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                          className="form-control form-control-lg"
                          placeholder="Email"
                          required="required"
                        /> */}
                        <input
                          type="text"
                          id="firstname"
                          name="firstName"
                          value={FirstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                          placeholder="First Name"
                          className="form-control"
                          required="required"
                        />
                      </div>

                      <div className="form-outline mb-3">
                        {/* <input
                          type="FirstName"
                          name="FirstName"
                          id="FirstName"
                          value={FirstName}
                          onChange={(e) => {
                            setusername(e.target.value);
                          }}
                          className="form-control form-control-lg"
                          placeholder="User Name"
                          required="required"
                        /> */}
                        <input
                          type="text"
                          id="lastname"
                          name="lastName"
                          value={LastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Last Name"
                          required="required"
                        />
                      </div>

                      <div className="form-outline mb-3">
                        {/* <input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                          className="form-control form-control-lg"
                          placeholder="Password"
                          required="required"
                        /> */}
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                          placeholder="Email"
                          className="form-control"
                          required="required"
                        />
                      </div>

                      <div className="form-outline mb-3">
                        {/* <input
                          type="fullname"
                          name="fullname"
                          id="fullname"
                          value={fullname}
                          onChange={(e) => {
                            setfullname(e.target.value);
                          }}
                          className="form-control form-control-lg"
                          placeholder="Full Name"
                          required="required"
                        /> */}
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                          placeholder="Password"
                          className="form-control"
                          required="required"
                        />
                      </div>

                      <div className="form-outline mb-3">
                        {/* <input
                          type="contactno"
                          name="contactno"
                          id="contactno"
                          value={contactno}
                          onChange={(e) => {
                            setcontactno(e.target.value);
                          }}
                          className="form-control form-control-lg"
                          placeholder="Contact No"
                          required="required"
                        /> */}
                        <input
                          type="password"
                          id="c-password"
                          name="confirm_password"
                          value={c_password}
                          onChange={(e) => {
                            setc_password(e.target.value);
                          }}
                          placeholder="Confirm Password"
                          className="form-control"
                          required="required"
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          for="form2Example3g"
                        >
                          I agree that the Muhammad Hamza may Regitertion me at
                          the email address or phone number above
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-style w-100"
                        onClick={signup}
                      >
                        submite
                      </button>
                    </form>
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

export default Signup;

// const submitData = async (event) => {
//   event.preventDefault();
//   const { email, FirstName, password, fullname, contactno, profileimage } =
//     userData;

//   if (
//     email &&
//     username &&
//     password &&
//     fullname &&
//     contactno &&
//     profileimage
//   ) {
//     createUserWithEmailAndPassword(auth, email)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });

//     const res = fetch(
//       "https://reactfirebasetwitterwebsite-default-rtdb.firebaseio.com/userDataRecords.json",
//       {
//         method: "POST",
//         Headers: {
//           "Contact-type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           username,
//           password,
//           fullname,
//           contactno,
//           profileimage,
//         }),
//       }
//     );
//     if (res) {
//       setUserData({
//         email: "",
//         username: "",
//         password: "",
//         fullname: "",
//         contactno: "",
//         profileimage: "",
//       });
//       alert("Data Stored");
//       n("./Login");
//     } else {
//       alert("plz fill the data");
//     }
//   } else {
//     alert("plz fill the data");
//   }
// };
