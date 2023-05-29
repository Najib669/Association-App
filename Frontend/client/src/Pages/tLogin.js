// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css"
// import { registerUser } from "../Actions/authuserActions";
// import { useDispatch, useSelector } from "react-redux";


// const Login = () => {
//   const isAuth = useSelector((state) => state.authReducer.isAuth);
//   const dispatch = useDispatch();
//   const [input, setInput] = useState({
//     fulName: "",
//     email: "",
//     password: "",
//     birthDay: "",
//     gender: "",
//     phoneNumber: "",
//     adress: "",
//     city: "",
//     country: ""

//   });

//   const navigate = useNavigate()
//   useEffect(() => {
//      if (isAuth) 
//      navigate('/profile' )
//   }, [isAuth])
//   const handleChange=(e)=>{
//     setInput({...input,[e.target.name]:e.target.value})
   
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//    dispatch(registerUser(input))
//   };




//   let [authMode, setAuthMode] = useState("signin");
//   const current = new Date().toISOString().split("T")[0];

//   const changeAuthMode = () => {
//     setAuthMode(authMode === "signin" ? "signup" : "signin");
//   };

//   if (authMode === "signin") {
//     return (
//       <div className="Auth-form-container">
//         <form className="Auth-form">
//           <div className="Auth-form-content">
//             <h3 className="Auth-form-title">Sign In</h3>
//             <div className="text-center">
//               Not registered yet?{" "}
//               <span className="link-primary" onClick={changeAuthMode}>
//                 Sign Up
//               </span>
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <Link to="/">
//                 <Button type="submit" className="btn btn-primary">
//                   Submit
//                 </Button>
//               </Link>
//             </div>
//             <p className="text-center mt-2">
//               Forgot <a href="#">password?</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div className="Auth-form-container">
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Sign Up</h3>
//           <div className="text-center">
//             Already registered?{" "}
//             <span className="link-primary" onClick={changeAuthMode}>
//               Sign In
//             </span>
//           </div>
//           <div className="form-group mt-3">
//             <label>FullName</label>
//             <input
//               type="FullName"
//               className="form-control mt-1"
//               placeholder="e.g Jane Doe"
//               name="fullName"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control mt-1"
//               placeholder="Email Address"
//               name="email"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control mt-1"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange} 
//             />
//           </div>
          
//           <div className="form-group mt-3">
//             <label>BirthDate</label>
//             <input
//               type="date"
//               id="datePickerId"
//               className="form-control mt-1"
//               name="birthDay"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Gender</label>
//             <Form.Select className="form-control mt-1" name="gender"  onChange={handleChange}>
//               <option>Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </Form.Select>
//           </div>
//           <div className="form-group mt-3">
//             <label>Phone Number</label>
//             <input
//               type="Phone Number"
//               className="form-control mt-1"
//               placeholder="+216"
//               name="phoneNumber"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Adress</label>
//             <input
//               type="Adress"
//               className="form-control mt-1"
//               placeholder="Adress"
//               name="adress"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>City</label>
//             <input
//               type="city"
//               className="form-control mt-1"
//               placeholder="City"
//               name="city"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Country</label>
//             <input
//               type="Country"
//               className="form-control mt-1"
//               placeholder="County"
//               name="country"
//               onChange={handleChange}
//             />
//           </div>
         
//           <div className="d-grid gap-2 mt-3">
         
//               <button type="submit" className="btn btn-primary"  onClick={handleSubmit}>
//                 Register
//               </button>
        
//           </div>
//           <p className="text-center mt-2">
//             Forgot <a href="#">password?</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Login;
