import React from "react";

export default function Footer(props) {
  const videoList = props.videoProp.map(video => {
    return (
      <div className="footer__container">
        <img className="footer__img" src={video.videoImg} alt="video" />
        <div className="footer__container__bottom">
          <h2 className="footer__header">{video.headline}</h2>
          <h2 className="footer__paragraph">{video.author}</h2>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h5 className="footer__label">NEXT VIDEO</h5>
      <div>{videoList}</div>
    </div>
  );
}
