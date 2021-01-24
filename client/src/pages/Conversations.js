import React from "react";
import ChildTweets from "../components/ChildTweets/ChildTweets";
import Header from "../components/Header/Header";
import ParentTweet from "../components/ParentTweet/ParentTweet";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import Sidebar from "../components/Sidebar/Sidebar";
import SubHeader from "../components/SubHeader/SubHeader";
import "./Conversation.css";

const Conversations = () => {
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
};

export default Conversations;
