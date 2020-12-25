import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./Screener.scss";

class Screener extends Component {
  render() {
    return (
      <div className="screener-page-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Screener</h1>

              <Link to="/vaccine-info">Vaccine Info</Link>
              <br />
              <Link to="/booking-form">Check Eligibility</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screener;
