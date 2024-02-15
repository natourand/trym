import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import user1profile from "./user1profile.jpg";
import user1pic from "./user1pic.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={user1pic} profileSrc={user1profile} title="User 1" />
      <Story image={user1pic} profileSrc={user1profile} title="User 1" />
      <Story image={user1pic} profileSrc={user1profile} title="User 1" />
      <Story image={user1pic} profileSrc={user1profile} title="User 1" />
    </div>
  );
}

export default StoryReel;
