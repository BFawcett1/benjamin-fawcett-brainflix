import React from "react";
import ProfileIcon from "../assets/images/Mohan-muruge.jpg";

export default function Comments(props) {
  const commentList =
    props.commentProp.mainVideo.comments &&
    props.commentProp.mainVideo.comments.map(comment => {
      let newDate = new Date(comment.timestamp);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let day = newDate.getDate();
      let fullDate = `${month}/${day}/${year}`;

      return (
        <div className="comments-mid" key={comment.id}>
          <div clasName="comments__top-container">
            <div className="comments__blankIcon"></div>
          </div>
            <div className="comments__mid-container">
            <div className="comments__head-date-container">
              <h2 className="comments__subheader">{comment.name}</h2>
              <h5 className="comments__date">{fullDate}</h5>
            </div>
            <div>
              <h2 className="comments__text">{comment.comment}</h2>
            </div>
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
          <input
            className="comments__input"
            type="text"
            placeholder="That was easily the most spectacular BMX moment ever."
          ></input>
          <button className="comments__button">COMMENT</button>
        </form>
      </div>
      {commentList}
    </div>
  );
}
