import "../styles/App.css";
import React from "react";
import MainMenu from "./MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import CoursersPage from "../pages/CoursersPage";
import IntershipsPage from "../pages/IntershipsPage";
import CalendarPage from "../pages/CalendarPage";
import FormRegister from "./FormRegister";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/coursers" component={CoursersPage} />
          <Route path="/interships" component={IntershipsPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/register" component={FormRegister} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
