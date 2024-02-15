import React from "react";
import "./Feed.css";
import StoryReel from "./story/StoryReel";
import { Message } from "@material-ui/icons";
import MessageSender from "./messageSender/MessageSender";
import Post from "./Post/Post";
import user1profile from "./story/user1profile.jpg";
import user1pic from "./story/user1pic.jpg";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
      profilePic={user1profile}
      message="first post"
      timestamp="timestamp"
      username="user1"
      image={user1pic}
      />
    </div>
  );
}

export default Feed;
