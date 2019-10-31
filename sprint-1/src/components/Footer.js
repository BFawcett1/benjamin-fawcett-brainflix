import React from "react";

export default function Footer(props) {
  const videoList = props.videoProp.map(video => {
    return (
      <div>
        <h2 className="footer__header">{video.headline}</h2>
        <h2 className="footer__paragraph">{video.author}</h2>
      </div>
    );
  });
  return (
    <div>
      <div>{videoList}</div>
    </div>
  );
}
