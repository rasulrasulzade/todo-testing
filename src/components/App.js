import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const App = () => {
  return (
    <div>
      <h5>Welcome todo comment</h5>
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default App;
