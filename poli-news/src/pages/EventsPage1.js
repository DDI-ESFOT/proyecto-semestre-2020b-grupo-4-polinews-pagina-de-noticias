import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";

const EventsPage1 = () => {
  return (
    <div>
      <hr />
      <h1 className="my-title">EVENTOS</h1>
      <hr />

      <Footer />
    </div>
  );
};
export default withAuth(EventsPage1);
