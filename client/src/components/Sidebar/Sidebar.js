import React from "react";
import "./sidebar.css";
import timer from "../../assets/img/timer.svg";
import home from "../../assets/img/home.svg";
import users from "../../assets/img/users.svg";
import chat from "../../assets/img/chat.svg";
import creditCard from "../../assets/img/credit-card.svg";
import record from "../../assets/img/record.svg";
import store from "../../assets/img/store.svg";

const Sidebar = () => {
  return (
    <main className="sidebar d-flex flex-column align-items-center">
      <section className="sidebar-btns d-flex flex-column align-items-center">
        <div className="sidebar-btn">
          <img src={timer} alt="timer-icon" id="timer-icon" />
        </div>
        <div className="sidebar-btn">
          <img src={home} alt="home-icon" id="home-icon" />
        </div>
        <div className="sidebar-btn">
          <img src={users} alt="users-icon" id="users-icon" />
        </div>
        <div className="sidebar-btn active">
          <img src={chat} alt="chat-icon" id="chat-icon" />
        </div>
        <div className="sidebar-btn">
          <img src={creditCard} alt="credit-card-icon" id="credit-card-icon" />
        </div>
        <div className="sidebar-btn">
          <img src={store} alt="store-icon" id="store-icon" />
        </div>
      </section>

      <section className="sidebar-bottom">
        <div className="sidebar-bottom-icon">
          <img src={record} alt="record-icon" id="record-icon" title="Logout" />
        </div>
        <div className="sidebar-profile"></div>
      </section>
    </main>
  );
};

export default Sidebar;
