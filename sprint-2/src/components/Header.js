import React from "react";
import BrainFlixLogo from "../assets/logo/Logo-brainflix.svg";
import ProfileIcon from "../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../assets/icons/SVG/Icon-search.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <div className="header__logo-container">
        <Link to ={`/`}>
        <img
          className="header__logo"
          src={BrainFlixLogo}
          alt="brainflix logo"
          ></img></Link>
        </div>
        <form className="header__form">
          <label></label>
        <input className="header__input" type="text" value= "  Search"></input>
          <div className="header__button-container">
            <Link to={`/UploadPage`}>
              <button className="header__button">+  UPLOAD</button>
            </Link>
            <img className="header__profile" src={ProfileIcon} alt="profile" />
          </div>
        </form>
    </header>
  );
}
