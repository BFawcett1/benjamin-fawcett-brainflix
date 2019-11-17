import React from "react";
import BrainFlixLogo from "../assets/Logo/Logo-brainflix.svg";
import ProfileIcon from "../assets/Images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img
          className="header__logo"
          src={BrainFlixLogo}
          alt="brainflix logo"
        ></img>
      </div>
      <div className="header__form-container">
        <form className="header__form">
          <label></label>
          <input className="header__input" type="text" value="Search"></input>
          <div className="header__bottom-container">
            <button className="header__button">+ Upload</button>
            <img className="header__profile" src={ProfileIcon} alt="profile" />
          </div>
        </form>
      </div>
    </header>
  );
}
