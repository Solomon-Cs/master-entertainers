import React from "react";
import { Link } from "react-router-dom";
import Fire from "../../asset/image/fire.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Master Entertainer</h2>
      <div className="navbar_links">
        <Link className="Link">
          <img src={Fire} alt="fire emoji" className="navbar_image" /> Latest
        </Link>
        <Link className="Link">
          <img src={Fire} alt="fire emoji" className="navbar_image" />
          Popular
        </Link>
        <Link className="Link">
          <img src={Fire} alt="fire emoji" className="navbar_image" />
          Top Rated
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
