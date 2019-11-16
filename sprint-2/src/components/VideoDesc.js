import React from "react";
import Video from "../assets/video/BrainStationVideo.mp4";
import Views from "../assets/icons/SVG/Icon-views.svg";
import Likes from "../assets/icons/SVG/Icon-likes.svg";

export default function VideoDesc(props) {
  // console.log(props);
  if (props.data && props.data) {
    return (
      <div className="video-desc">
        <div className="video-desc__video-container">
          <video
            controls
            className="video-desc__video"
            poster={props.data.image}
          ></video>
        </div>
        <div className="video-desc__container">
          <h1 className="video-desc__header">{props.data.title}</h1>
          <div className="video-desc__break-container">
            <div className="video-desc__sub-container">
              <h2 className="video-desc__subheader">By {props.data.channel}</h2>
              <h5 className="video-desc__date">{props.data.date}</h5>
            </div>
            <div className="video-desc__iconContainer">
              <img className="video-desc__image" src={Views} alt="views" />
              <h4 className="video-desc__number">{props.data.views}</h4>
              <img className="video-desc__image" src={Likes} alt="likes" />
              <h4 className="video-desc__number">{props.data.likes}</h4>
            </div>
          </div>
          <p className="video-desc__paragraph">{props.data.description}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
