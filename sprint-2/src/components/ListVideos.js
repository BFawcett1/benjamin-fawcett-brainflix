import React from "react";
import {Link} from "react-router-dom"

export default function Footer(props) {
  //console.log(props);
   const videoList = props.videoProp.sideVideos && props.videoProp.sideVideos.map(video => {
    return (
      <Link
      to={`/nextVideo/${video.id}`}
      className="list-videos__container"
      key={video.id}>
      <div className="list-videos__container">
        <img className="list-videos__img" src={video.image} alt="video" />
        <div className="list-videos__container__bottom">
          <h2 className="list-videos__header">{video.title}</h2>
          <h2 className="list-videos__paragraph">{video.channel}</h2>
        </div>
        </div></Link>
    );
  })
  return (
    <div>
      <h5 className="list-videos__label">NEXT VIDEO</h5>
      <div>{videoList}</div>
    </div>
  );

  }