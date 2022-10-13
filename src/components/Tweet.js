import { dbService } from "fbase";
import React from "react";

const Tweet = ({ key, tweetObj, isOwner }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure, you want to delete this Tweet?");
    if (ok) {
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
    }
  };
  return (
    <div>
      <h4>{tweetObj.text}</h4>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>Delete Tweet</button>
          <button>Edit Tweet</button>
        </>
      )}
    </div>
  );
};

export default Tweet;
