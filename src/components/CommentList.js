import React from "react";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comments = useSelector((state) => state.comments);
  
  return (
    <div>
      Comment List
      {comments.length > 0
        ? comments.map((el, i) => <li key={i}>{el}</li>)
        : null}
    </div>
  );
};
export default CommentList;
