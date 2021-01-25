import React, { Component } from "react";
import ChildTweets from "../components/ChildTweets/ChildTweets";
import Header from "../components/Header/Header";
import ParentTweet from "../components/ParentTweet/ParentTweet";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import Sidebar from "../components/Sidebar/Sidebar";
import SubHeader from "../components/SubHeader/SubHeader";
import "./Conversation.css";
import { SET_CURRENT_USER, SET_CURRENT_PROFILE } from "../actions/types";
import { connect } from "react-redux";
import axios from "axios";
import { twitterSignInAction } from "../actions/twitterActions";

const signInInfo = (pyload) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: pyload,
  });
};

let profileInfo = (pyload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PROFILE,
    payload: pyload,
  });
};

class Conversations extends Component {
  async componentDidMount() {
    let search = window.location.search;
    let oauth_token = search && search.substr(1, search.length).split("&")[0];
    oauth_token = oauth_token.split("=")[1];
    let oauth_verifier =
      search && search.substr(1, search.length).split("&")[1];
    oauth_verifier = oauth_verifier.split("=")[1];

    let pyload = {
      token: "wearehere",
      user: "shreyans",
    };

    this.props.signInInfo(pyload);

    console.log(oauth_verifier);
    const oauthRequestTokenSecret = localStorage.getItem("oauthTokenSecret");

    let obj = {
      oauth_token: oauth_token,
      oauth_verifier: oauth_verifier,
      oauthRequestTokenSecret: oauthRequestTokenSecret,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/twitter/accessTokens",
        obj
      );

      console.log(response.data);

      let pyload = {
        profile: response.data,
      };

      // this.props.profileInfo(pyload)
      localStorage.setItem("handle", response.data);
    } catch (err) {}
  }

  render() {
    return (
      <main className="conversations">
        <section className="conversations--left">
          <Sidebar />
        </section>
        <section className="conversations--right">
          <Header /> ̰
          <SubHeader />
          <section className="tweets">
            <section className="tweets--left">
              <section className="tweets-latest">
                <ParentTweet />
              </section>
            </section>
            <section className="tweets--right">
              <ChildTweets />
              <ProfileDetails />
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default connect(null, { signInInfo })(Conversations);
