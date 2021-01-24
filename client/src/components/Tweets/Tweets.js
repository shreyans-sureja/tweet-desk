import React from "react";
import "./Tweets.css";
import users from "../../assets/img/users.svg";

const Tweets = (props) => {
  return (
    <section className="childtweetmsg">
      <img src={users} alt="Profile" className="profile-pic" />
      <div className="childtweetmsg--right">
        <div className="childtweetmsg-header">
          <div className="childtweetmsg-greet">
              demo tweet
          </div>
          <div className="childtweetmsg-time">10 : 00</div>
        </div>
      </div>
    </section>
  );
};

export default Tweets;
