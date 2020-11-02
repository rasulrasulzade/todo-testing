import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveComment } from "../redux/actionCreators";

const CommentBox = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment !== "") {
      dispatch(saveComment({ text: comment }));
    }

    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <h4>Add a comment</h4>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default CommentBox;
