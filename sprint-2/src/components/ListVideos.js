import React from "react";
import {Link} from "react-router-dom"

export default function Footer(props) {
  //console.log(props);
   const videoList = props.videoProp.sideVideos && props.videoProp.sideVideos.map(video => {
    return (
      <Link
      to={`/nextVideo/${video.id}`}
      className="footer__container"
      key={video.id}>
      <div className="footer__container">
        <img className="footer__img" src={video.image} alt="video" />
        <div className="footer__container__bottom">
          <h2 className="footer__header">{video.title}</h2>
          <h2 className="footer__paragraph">{video.channel}</h2>
        </div>
        </div></Link>
    );
  })
  return (
    <div>
      <h5 className="footer__label">NEXT VIDEO</h5>
      <div>{videoList}</div>
    </div>
  );

  }