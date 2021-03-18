import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";

function CalendarPage1() {
  return (
    <div>
      <hr />
      <h1 className="my-title">CALENDARIO</h1>
      <hr />

      <Footer />
    </div>
  );
}
export default withAuth(CalendarPage1);
