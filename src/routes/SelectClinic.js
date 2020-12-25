import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./SelectClinic.scss";

class SelectClinic extends Component {
  render() {
    return (
      <div className="select-clinic-page-container">
        <Link to="/booking-form">Close</Link>
        <h1>Select Clinic</h1>
      </div>
    );
  }
}

export default SelectClinic;
