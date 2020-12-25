import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./SelectDate.scss";

class SelectDate extends Component {
  render() {
    return (
      <div className="select-date-page-container">
        <Link to="/booking-form">Close</Link>
        <h1>Select Date</h1>
      </div>
    );
  }
}

export default SelectDate;
