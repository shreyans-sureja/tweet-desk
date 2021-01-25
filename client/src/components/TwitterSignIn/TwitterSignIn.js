import React from "react";
import twitterLogo from "../../assets/img/twitter-logo.png";
import "./twitterSignIn.css";
import { useHistory, useLocation } from "react-router-dom";
import { twitterSignInAction } from "../../actions/twitterActions";
import axios from "axios";

const TwitterSignIn = () => {
  const history = useHistory();

  const handleTwitterLogin = async () => {
    try {
      await axios
        .get("http://127.0.0.1:8080/api/twitter/connect")

        .then((response) => {
          console.log("ee", response.data);
          let oauthToken = response.data.oauthToken;
          let oauthTokenSecret = response.data.oauthTokenSecret;
          localStorage.setItem("oauthTokenSecret", oauthTokenSecret);
          window.location.href = response.data.redirectUrl;
        });
    } catch (err) {}
  };

  return (
    <main className="login">
      <header className="login-header">Twitter Helpdesk</header>

      <section className="login-content">
        <section className="login-content-box">
          <div className="login-content-box-header">
            Already have a Twitter Account?
          </div>
          <button onClick={handleTwitterLogin} className="twitter-btn">
            <img
              src={twitterLogo}
              alt="twitter-logo"
              className="twitter-logo"
            />
            <div className="twitter-btn-text">Sign in with Twitter</div>
          </button>
        </section>
        <section className="login-content-box">
          <div className="login-content-box-header">
            Create a Twitter Account
          </div>
          <button className="twitter-btn">
            <img
              src={twitterLogo}
              alt="twitter-logo"
              className="twitter-logo"
            />
            <div className="twitter-btn-text">Create Account</div>
          </button>
        </section>
      </section>
    </main>
  );
};

export default TwitterSignIn;
