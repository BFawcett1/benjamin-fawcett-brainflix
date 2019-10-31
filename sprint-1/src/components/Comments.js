import React from "react";
export default function Comments(props) {
  const commentList = props.commentProp.map(comment => {
    return (
      <div className="comments__container">
        <div className="comments__top-container">
          <h2 className="comments__subheader">{comment.firstName}</h2>
          <h5 className="comments__date">{comment.date}</h5>
        </div>
        <h2 className="comments__text">{comment.commentText}</h2>
      </div>
    );
  });
  return (
    <div className="comments">
      <h2 className="comments__header">3 Comments</h2>
      <h5 className="comments__label">JOIN THE CONVERSATION</h5>
      <div>
        <form>
          <label></label>
          <input
            className="comments__input"
            type="text"
            value="That was easily the most spectacular BMX moment ever."
          ></input>
          <button className="comments__button">Comment</button>
        </form>
      </div>
      {commentList}
    </div>
  );
}
