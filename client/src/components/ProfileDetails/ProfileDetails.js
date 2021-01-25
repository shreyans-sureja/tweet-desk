import React from "react";
import { useSelector } from "react-redux";
import cross from "../../assets/img/cross.svg";
import users from "../../assets/img/users.svg";
import email from "../../assets/img/email.svg";
import call from "../../assets/img/call.svg";
import "./profileDetails.css";

const ProfileDetails = () => {
  const profile = useSelector((state) => state.profile.profile);

  return (
    <section className="profile-details">
      <img src={cross} alt="Cross Icon" className="cross-icon" />
      <img src={users} alt="Profile" className="profile-details-pic" />

      <div className="profile-details-name">{profile.name}</div>
      <div className="profile-details-status">Online </div>
      <div className="profile-details-contact">
        <div className="profile-details-call">
          <img src={call} alt="Call" className="profile-details-callIcon" />
          <span>Call</span>
        </div>
        <div className="profile-details-email">
          <img src={email} alt="Email" className="profile-details-emailIcon" />
          <span>Email</span>
        </div>
      </div>
      <section className="profile-details-table">
        <div className="profile-details-row">
          <div>Followers</div>
          <div>{profile.followers_count}</div>
        </div>
        <div className="profile-details-row">
          <div>Following</div>
          <div>{profile.friends_count}</div>
        </div>
        <div className="profile-details-row">
          <div>Username</div>
          <div>{profile.screen_name}</div>
        </div>
      </section>
    </section>
  );
};

export default ProfileDetails;
