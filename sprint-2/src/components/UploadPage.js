import React from "react";
import Header from "react";
import VideoThumb from "../assets/images/upload-video-preview.jpg";

export default function UploadPage(props) {
  return (
    <div className="upload-page">
      <h1 className="upload-page__header">Upload Video</h1>
      <h5 className="upload-page__video-label">VIDEO THUMBNAIL</h5>
      <div className="upload-page__img-container">
        <img className="upload-page__img" src={VideoThumb} alt="videoThumb"/>
      </div>
        <h5 className="upload-page__video-label">TITLE YOUR VIDEO</h5>
        <form className="upload-page__form">
          <label className="upload-page__form-label"></label>
          <input className="upload-page__input" type="text" value="Add a title to your video"></input>
        </form>
          <h5 className="upload-page__video-label">ADD A VIDEO DESCRIPTION</h5>
          <form className="upload-page__bottom-form">
            <label className="upload-page__form-label"></label>
            <input className="upload-page__input-bottom" type="text" value="Add a description of your video"></input>
        </form>
        <button className="upload-page__button">PUBLISH</button>
        <h2 className="upload-page__subheader">CANCEL</h2>
    </div>
  );
}
