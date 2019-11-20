import React from "react";
import Header from "react";
import VideoThumb from "../assets/images/upload-video-preview.jpg";
import Axios from "axios";

export default function UploadPage(props) {
  let submitHandler = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    Axios.post("http://localhost:5000/videos", {
      title: title,
      description: description,
      image: VideoThumb
    });
  };
  return (
    <div className="upload-page">
      <div className="upload-page__header-container">
        <h1 className="upload-page__header">Upload Video</h1>
      </div>
      <div className="upload-page__mid-container">
        <div className="upload-page__video-container">
          <h5 className="upload-page__video-label">VIDEO THUMBNAIL</h5>
          <div className="upload-page__img-container">
            <img
              className="upload-page__img"
              src={VideoThumb}
              alt="videoThumb"
            />
          </div>
        </div>
          
          <form className="upload-page__form" onSubmit={submitHandler}>
          <div className="upload-page__upper-container">
          <h5 className="upload-page__video-label">TITLE YOUR VIDEO</h5>
            <label className="upload-page__form-label"></label>
            <input
              className="upload-page__input"
              type="text"
              name="title"
              placeholder="  Add a title to your video"
            ></input>
          <h5 className="upload-page__video-label">ADD A VIDEO DESCRIPTION</h5>
          <label className="upload-page__form-label"></label>
          <input
            className="upload-page__input-bottom"
            type="text"
            name="description"
            placeholder="  Add a description of your video"
          ></input>
          </div>
          <div className="upload-page__container">
            <button className="upload-page__button">PUBLISH</button>
            <h2 className="upload-page__subheader">CANCEL</h2>
          </div>
        </form>
      </div>
    </div>
  );
}
