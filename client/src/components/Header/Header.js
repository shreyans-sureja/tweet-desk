import React from "react";
import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
  const user = useSelector((state) => state.security.user);

  return (
    <main className="header d-flex justify-content-between p-2">
      <div className="header--left">Updates</div>
      <section className="header--right d-flex">
        <div className="header-session">Session: 34 minutes</div>
        <div className="header-user">{user.user}</div>
      </section>
    </main>
  );
};

export default Header;
