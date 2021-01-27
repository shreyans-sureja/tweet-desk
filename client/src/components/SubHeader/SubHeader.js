import React from "react";
import "./subHeader.css";
import filter from "../../assets/img/filter.svg";
import dropdown from "../../assets/img/dropdown.svg";

const SubHeader = () => {
  return (
    <main className="subheader">
      <section className="subheader--left">
        <div className="subheader-text">Conversations</div>
        <div className="subheader-searchbox"></div>
        <div className="subheader-filter">
          <img src={filter} alt="filter-icon" className="filter-icon" />
          <div className="subheader-filter-text">Filter</div>
        </div>
      </section>
      <div className="subheader--right">
        <div className="green-dot"></div>
        <div className="subheader-online">Online</div>
        <img src={dropdown} alt="dropdown-icon" className="dropdown-icon" />
      </div>
    </main>
  );
};

export default SubHeader;
