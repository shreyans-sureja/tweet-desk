import React from "react";
import "./parentTweet.css";
import users from "../../assets/img/users.svg";

const ParentTweet = () => {
  return (
    <section className="tweetbox">
      <div className="tweetbox--left">
        <img
          src={users}
          alt="Profile"
          className="tweetbox-profilePic"
          height="50"
          width="50"
        />
      </div>
      <div className="tweetbox--right">
        <div className="tweetbox-header">
          <div className="tweetbox-header-name">Shreyans sureja</div>
          <div className="green_dot"></div>
          <div className="tweetbox-header-msgCount">2 </div>
        </div>

        <div className="tweetbox-msg">Modiji aapne intne chamche khase laye?</div>
      </div>
    </section>
  );
};

export default ParentTweet;
