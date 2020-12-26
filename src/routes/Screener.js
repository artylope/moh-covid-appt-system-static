import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./Screener.scss";

class Screener extends Component {
  render() {
    return (
      <div className="screener-page-container">
        <div className="app-header-container">Health Questionaire</div>
        <div className="progress-checker-container">d</div>
        <Link to="/vaccine-info">Vaccine Info</Link>
        <br />
        <Link to="/booking-form">Check Eligibility</Link>
      </div>
    );
  }
}

export default Screener;
