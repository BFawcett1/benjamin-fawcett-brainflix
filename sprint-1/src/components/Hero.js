import React from "react";
import Video from "../assets/Video/BrainStationVideo.mp4";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__video-container">
        <video className="hero__video" src={Video}></video>
      </div>
      <div className="hero__container">
        <h1 className="hero__header">BMX Rampage: 2018 Highlights</h1>
        <div className="hero__break-container">
          <div className="hero__sub-container">
            <h2 className="hero__subheader">By Red Cow</h2>
            <h5 className="hero__date">12/18/2018</h5>
          </div>
          <div class="hero__iconContainer">
            <img className="hero__image" src={Views} alt="views" />
            <h4 className="hero__number">1,001,023</h4>
            <img className="hero__image" src={Likes} alt="likes" />
            <h4 className="hero__number">110,985</h4>
          </div>
        </div>
        <p className="hero__paragraph">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his ﬁrst Red
          Cow Rampage title
        </p>
      </div>
    </div>
  );
}
