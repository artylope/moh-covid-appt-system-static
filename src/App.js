import React, { Component } from "react";
import "./App.scss";

import Masthead from "components/Masthead";
import OgpFooter from "components/OgpFooter";

import {
  HashRouter,
  BrowserRouter,
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Login from "routes/Login";
import Screener from "routes/Screener";
import VaccineInfo from "routes/VaccineInfo";
import BookingForm from "routes/BookingForm";
import BookingNotEligible from "routes/BookingNotEligible";
import SelectClinic from "routes/SelectClinic";
import SelectDate from "routes/SelectDate";
import BookingConfirmation from "routes/BookingConfirmation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Masthead />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/screener">
            <Screener />
          </Route>
          <Route path="/vaccine-info">
            <VaccineInfo />
          </Route>
          <Route path="/booking-form">
            <BookingForm />
          </Route>
          <Route path="/booking-not-eligible">
            <BookingNotEligible />
          </Route>
          <Route path="/select-clinic">
            <SelectClinic />
          </Route>
          <Route path="/select-date">
            <SelectDate />
          </Route>
          <Route path="/booking-confirmation">
            <BookingConfirmation />
          </Route>
        </Switch>
        <OgpFooter />
      </BrowserRouter>
    );
  }
}

export default App;
