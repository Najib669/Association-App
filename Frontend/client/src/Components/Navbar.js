import { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
import { Button } from "bootstrap";


const Navbar = ({handleInput }) => {
  const token = useSelector((state) => state.authReducer.token);


  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };


  

  return (
    
    <div className="nav__wrapper">
     
        <nav className="nav">
          <div className="me-auto">
            <SocialIcon
              url="https://youtube.com/jaketrent"
              target="blank"
              bgColor="red"
              style={{ height: 30, width: 30 }}
            ></SocialIcon>
            <SocialIcon
              url="https://facebook.com/jaketrent"
              target="blank"
              bgColor="blue"
              style={{ height: 30, width: 30 }}
            ></SocialIcon>
            <SocialIcon
              url="https://twitter.com/jaketrent"
              target="blank"
              className="socialicon"
              style={{ height: 30, width: 30 }}
            ></SocialIcon>
          </div>
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" id="input_text"   onChange={(e)=>handleInput (e.target.value)}></input>
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          {!token?(<><ul className={collapse}>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/aboutus" className="nav__link" >
                About Us
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/news" className="nav__link">
                News
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/events" className="nav__link">
                Events
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/shop" className="nav__link">
                Shop
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/donation" className="nav__link">
                Donation
              </Link>
            </li>
           
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div></>):(<><ul className={collapse}>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/aboutus" className="nav__link">
                About Us
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/news" className="nav__link">
                News
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/events" className="nav__link">
                Events
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/shop" className="nav__link">
                Shop
              </Link>
            </li>
            
            <li className="nav__item">
              <Link to="/donation" className="nav__link">
                Donation
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/profile" className="nav__link">
               Profile
              </Link>
            </li>
            
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
          </>)}

        </nav>
   
    </div>
  );
};

export default Navbar;
