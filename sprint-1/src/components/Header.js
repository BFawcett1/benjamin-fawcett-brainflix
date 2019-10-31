import React from "react";
import BrainFlixLogo from "../assets/Logo/Logo-brainflix.svg";
import ProfileIcon from "../assets/Images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header>
      <div className="header__logo-container">
        <img
          className="header__logo"
          src={BrainFlixLogo}
          alt="brainflix logo"
        ></img>
      </div>
      <div className="header__form-container">
        <form>
          <label></label>
          <input className="header__input" type="text" value="Search"></input>
          <button className="header__button">+ Upload</button>
        </form>
        <div className="header__profile-container">
          <img
            className="header__profile"
            src={ProfileIcon}
            alt="profile image"
          ></img>
        </div>
      </div>
    </header>
  );
}
