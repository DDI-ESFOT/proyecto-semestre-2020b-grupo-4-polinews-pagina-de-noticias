import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";

function CalendarPage1() {
  return (
    <div>
      <Footer />
    </div>
  );
}
export default withAuth(CalendarPage1);
