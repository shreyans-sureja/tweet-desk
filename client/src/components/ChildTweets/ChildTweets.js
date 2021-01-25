import React from "react";
import users from "../../assets/img/users.svg";
import Tweets from "../Tweets/Tweets";
import "./childTweets.css";

const ChildTweets = () => {
  return (
    <main className="childtweets">
      <section className="childtweets-header">
        <img src={users} alt="Profile" className="childtweets-profilePic" />

        <div className="childtweets-header-name">name</div>
      </section>
      <section className="childtweets-body">
        <div className="childtweets-body-header">10: 00</div>
        <Tweets />

        <div className="childtweets-body-assigned"></div>

        {/* loop tweets* */}
      </section>

      <div className="childtweets-body-reply">
        <section className="reply">
          <img src={users} alt="assitant" className="profile-pic" />

          <input type="text" className="reply-input" placeholder="Reply..." />
        </section>
      </div>
    </main>
  );
};

export default ChildTweets;
