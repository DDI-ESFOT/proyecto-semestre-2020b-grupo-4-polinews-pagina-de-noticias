import "../styles/App.css";
import React from "react";
import MainMenu from "./MainMenu";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import CoursersPage from "../pages/CoursersPage";
import IntershipsPage from "../pages/IntershipsPage";
import CalendarPage from "../pages/CalendarPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomeNoLogin from "../pages/HomeNoLogin";
import ProfilePage from "../pages/ProfilePage";
import Login from "./Login";
import FormRegister from "./FormRegister";
import TermsConditions from "./TermsConditions";
import { AuthProvider } from "../lib/Auth";
import ProfileCalendarPage from "../pages/ProfileCalendarPage";
import ProfileNotePage from "../pages/ProfileNotePage";
import ProfileCoursesPage from "../pages/ProfileCoursesPage";
import EventesLevelOnePage from "../pages/EventesLevelOnePage";
import CoursersLevelOnePage from "../pages/CoursersLevelOnePage";
import IntershipsLevelOnePage from "../pages/IntershipsLevelOnePage";

function App() {
  return (
    <>
      <AuthProvider>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/logout" component={HomeNoLogin} />
          <Route path="/events" component={EventsPage} />
          <Route path="/events_level1" component={EventesLevelOnePage} />
          <Route path="/coursers" component={CoursersPage} />
          <Route path="/coursers_level1" component={CoursersLevelOnePage} />
          <Route path="/interships" component={IntershipsPage} />
          <Route path="/interships_level1" component={IntershipsLevelOnePage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/terms_conditions" component={TermsConditions} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={FormRegister} />
          <Route path="/profile_calendar" component={ProfileCalendarPage} />
          <Route path="/profile_notification" component={ProfileNotePage} />
          <Route path="/profile_courses" component={ProfileCoursesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
