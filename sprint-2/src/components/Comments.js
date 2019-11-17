import React from "react";
import ProfileIcon from "../assets/images/Mohan-muruge.jpg";

export default function Comments(props) {
  console.log(props.commentProp.mainVideo &&
    props.commentProp.mainVideo)
  const commentList = 
    props.commentProp.mainVideo.comments &&
    props.commentProp.mainVideo.comments.map(comment => {
      return (
        <div className="comments">
            <div className="comments__top-container">
              <div className="comments__blankIcon"></div>
              <h2 className="comments__subheader">{comment.name}</h2>
              <h5 className="comments__date">{comment.timestamp}</h5>
            </div>
        <div className="comments__text-container">
          <h2 className="comments__text">{comment.comment}</h2>
        </div>
        </div>
      );
    });
  return (
    <div className="comments">
      <h2 className="comments__header">3 Comments</h2>
      <h5 className="comments__label">JOIN THE CONVERSATION</h5>
      <div className="comments__container-bottom">
        <img className="comments__profile" src={ProfileIcon} alt="profile" />
        <form className="comments__form">
          <label></label>
          <input
            className="comments__input"
            type="text"
            value="  That was easily the most spectacular BMX moment ever."
          ></input>
          <button className="comments__button">COMMENT</button>
        </form>
      </div>
      {commentList}
    </div>
  );
}
