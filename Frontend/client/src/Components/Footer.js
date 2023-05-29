import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="col-md-1 col-sm- col-xs-12">
          <p className="copyright-text">
            Copyright &copy; 2023 All Rights Reserved by RNO.
            <Link>link</Link>
            <br />
            <Link to="/">Privacy Policy</Link>

          </p>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
