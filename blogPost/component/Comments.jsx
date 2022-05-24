import React from "react";
import Comment from "./Comment";
export default function Comments(props) {
  const comments = props.comments.map((comment) => {
    return <Comment comment={comment} />;
  });
  return (
    <div className="comments alert alert-warning">
      <h3>Comments:</h3>

    {comments}


    </div>
  );
}
