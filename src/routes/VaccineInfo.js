import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./VaccineInfo.scss";

class VaccineInfo extends Component {
  render() {
    return (
      <div className="vaccine-info-page-container">
        <h1>Vaccine Info</h1>
        <Link to="/screener">Close</Link>
      </div>
    );
  }
}

export default VaccineInfo;
