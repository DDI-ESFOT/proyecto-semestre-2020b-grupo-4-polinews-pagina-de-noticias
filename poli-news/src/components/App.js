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
import CoursesPage1 from "../pages/CoursesPage1";
import EventsPage1 from "../pages/EventsPage1";
import IntershipsPage1 from "../pages/IntershipsPage1";
import CalendarPage1 from "../pages/CalendarPage1";

function App() {
  return (
    <>
      <AuthProvider>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/logout" component={HomeNoLogin} />
          <Route path="/events" component={EventsPage} />
          <Route path="/coursers" component={CoursersPage} />
          <Route path="/interships" component={IntershipsPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/terms_conditions" component={TermsConditions} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={FormRegister} />
          <Route path="/profile_calendar" component={ProfileCalendarPage} />
          <Route path="/profile_notification" component={ProfileNotePage} />
          <Route path="/profile_courses" component={ProfileCoursesPage} />
          <Route path="/courses_level1" component={CoursesPage1} />
          <Route path="/events_level1" component={EventsPage1} />
          <Route path="/interships_level1" component={IntershipsPage1} />
          <Route path="/calendar_level1" component={CalendarPage1} />
          <Route component={NotFoundPage} />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
