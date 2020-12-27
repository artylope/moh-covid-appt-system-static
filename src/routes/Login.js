import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import mohLogo from "img/moh-logo.png";
import mohLogoHorizontal from "img/moh-logo-horizontal.png";
import vaccineLogin from "img/vaccine-login.svg";
import researchLogin from "img/research-login.svg";
import backgroundWave from "img/background-wave.svg";

import { ReactComponent as IconClear } from "img/icons/bx-x.svg";
import { ReactComponent as IconIdCard } from "img/icons/bx-id-card.svg";
import { ReactComponent as IconLock } from "img/icons/bx-lock-alt.svg";

import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <div className="login-page-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="moh-logo">
                <img src={mohLogo} />
              </div>

              <h1>Registration</h1>
              <h2>Covid-19 Vaccination</h2>
            </div>
          </div>
        </div>
        <div className="no-container">
          <div className="card">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="login-image">
                    <img src={vaccineLogin} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
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
                    <button className="btn btn-primary btn-block">
                      {" "}
                      <Link to="/screener">Get Started</Link>
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
      </div>
    );
  }
}

export default Login;
