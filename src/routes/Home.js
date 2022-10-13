import Tweet from "components/Tweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // RealTime
    dbService
      .collection("tweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const tweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweetArray);
        console.log(tweetArray);
      });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("tweets").add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={tweet}
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Tweet!" />
      </form>
      <div key={tweet.id}>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
