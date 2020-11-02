import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchAllCommentsRequested } from "../redux/actionCreators";

const CommentList = () => {
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCommentsRequested());
  }, []);

  return (
    <div>
      <h5>Comment List</h5>
      {comments.length > 0
        ? comments.map((el, i) => <div key={i}>{el.text}</div>)
        : null}
    </div>
  );
};

export default CommentList;
