import React from "react";
import Video from "../assets/video/BrainStationVideo.mp4";
import Views from "../assets/icons/SVG/Icon-views.svg";
import Likes from "../assets/icons/SVG/Icon-likes.svg";

export default function Hero(props) {
  // console.log(props);
  if (props.data && props.data) {
    return (
      <div className="hero">
        <div className="hero__video-container">
          <video
            controls
            className="hero__video"
            poster={props.data.image}
          ></video>
        </div>
        <div className="hero__container">
          <h1 className="hero__header">{props.data.title}</h1>
          <div className="hero__break-container">
            <div className="hero__sub-container">
              <h2 className="hero__subheader">By {props.data.channel}</h2>
              <h5 className="hero__date">{props.data.date}</h5>
            </div>
            <div className="hero__iconContainer">
              <img className="hero__image" src={Views} alt="views" />
              <h4 className="hero__number">{props.data.views}</h4>
              <img className="hero__image" src={Likes} alt="likes" />
              <h4 className="hero__number">{props.data.likes}</h4>
            </div>
          </div>
          <p className="hero__paragraph">{props.data.description}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
