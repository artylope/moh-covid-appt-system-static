import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./BookingConfirmation.scss";

class BookingConfirmation extends Component {
  render() {
    return (
      <div className="booking-confirmation-page-container">
        <h1>Booking Confirmation</h1>
        <Link to="/booking-form">Edit Booking </Link>
        <br />
        <Link to="/booking-not-eligible">If not eligible </Link>
      </div>
    );
  }
}

export default BookingConfirmation;
