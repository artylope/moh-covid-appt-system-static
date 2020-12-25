import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./BookingForm.scss";

class BookingForm extends Component {
  render() {
    return (
      <div className="booking-form-page-container">
        <h1>Booking Form</h1>
        <Link to="/select-clinic">Select Clinic</Link>
        <br />
        <Link to="/select-date">Select Date</Link>
        <br />
        <Link to="/booking-confirmation">Submit Booking </Link>
      </div>
    );
  }
}

export default BookingForm;
