import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "./Profile.scss"
import { getUser } from "../Actions/authuserActions"
import {logout} from "../Actions/authuserActions";


const Profile = () => {

  const {user} = useSelector((state) => state.authReducer);
  const id =user._id
  const userById = useSelector((state) => state.authReducer.userById);
  console.log("userbyid" , userById)
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(logout());
  };



  
  console.log(id)
  const       content = [
    "fullName",
    "email",
    "birthDay",
    "gender",
    "phoneNumber",
    "adress",
    "country",
    "city",
  ];
  return (
    
    <div className="top">
    
    <div className="left">
      <Link to="/updateprofile">
      <div className="editButton">Edit</div></Link>
      {/* <div className="logoutButton" onClick={handleLogin}>Logout</div> */}
      <Link to="/"> <div className="logoutButton" onClick={handleLogin}>Logout</div></Link>
      <h1 className="title"> Informations</h1>
      <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbtGXPk6L8oz8e9uDTbkPJ1z-Yp3bdHTAYQ&usqp=CAU" alt="" className="itemImg" />

        <div className="details">
          
          {content.map((el) => (
            <div className="detailItem">
              <span className="itemKey">{el}:</span>

              <span className="itemValue">{user ?.[el]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
   
    <div className="right">right part</div>
    
  </div>
  
  )
}

export default Profile