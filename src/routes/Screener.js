import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./Screener.scss";

import backgroundWave from "img/background-wave.svg";

import { ReactComponent as IconClear } from "img/icons/bx-x.svg";
import { ReactComponent as IconIdCard } from "img/icons/bx-id-card.svg";
import { ReactComponent as IconLock } from "img/icons/bx-lock-alt.svg";

class Screener extends Component {
  render() {
    return (
      <div className="screener-page-container">
        <div className="app-header-container">Health Questionaire</div>
        <div className="no-container">
          <div className="progress-checker-container"></div>
        </div>

        <div className="no-container">
          <div className="card">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <form>
                    <div className="input-group">
                      <label>Registration ID</label>
                      <div className="caption">
                        Enter the 6 digit code sent by SMS
                      </div>
                      <div className="input-field">
                        <div className="input-icon-left disabled">
                          <IconLock />
                        </div>
                        <input
                          type="text"
                          placeholder="S1234567A"
                          disabled
                        ></input>

                        {/* <div className="input-icon-right">
                          {" "}
                          <IconClear />
                        </div> */}
                      </div>
                    </div>
                    <div className="input-group">
                      <label>NRIC/FIN</label>

                      <div className="input-field">
                        <div className="input-icon-left">
                          <IconIdCard />
                        </div>
                        <input type="text" placeholder="S1234567A"></input>
                        <div className="input-icon-right">
                          {" "}
                          <IconClear />
                        </div>
                      </div>
                    </div>
                    <div className="input-group-inline">
                      <input type="checkbox"></input>
                      <label>
                        I have been informed of the risks, benefits and side
                        effects of the COVID-19 vaccination, and I wish to
                        receive it.
                      </label>
                    </div>
                    <button className="btn btn-primary btn-block">
                      {" "}
                      <Link to="/booking-form">Check Eligibility</Link>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background-wave">
          <img src={backgroundWave} />
        </div>
        <Link to="/vaccine-info">Vaccine Info</Link>
        <br />
        <Link to="/booking-form">Check Eligibility</Link>
      </div>
    );
  }
}

export default Screener;
