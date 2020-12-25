import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./BookingNotEligible.scss";

class BookingNotEligible extends Component {
  render() {
    return (
      <div className="booking-not-eligible-page-container">
        <h1>Booking Not Eligible</h1>
        <Link to="/booking-confirmation">If eligible </Link>
        <br />
        <Link to="/">Restart Flow </Link>
      </div>
    );
  }
}

export default BookingNotEligible;
