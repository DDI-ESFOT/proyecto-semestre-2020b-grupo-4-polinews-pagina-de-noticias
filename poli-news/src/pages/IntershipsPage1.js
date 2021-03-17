import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";

const IntershipsPage1 = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};
export default withAuth(IntershipsPage1);
