import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";
import EventInfo from "../components/EventInfo";
import SocialMedia from "../components/SocialMedia";

const EventsPage1 = () => {
  return (
    <div>
      <hr />
      <h1 className="my-title">EVENTO</h1>
      <hr />

      <div className="square">
        <EventInfo />
      </div>

      <div>
        <SocialMedia />
      </div>

      <Footer />
    </div>
  );
};
export default withAuth(EventsPage1);
