import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";

const IntershipsPage1 = () => {
  return (
    <div>
      <hr />
      <h1 className="my-title">PASANTIAS & VACANTES</h1>
      <hr />

      <Footer />
    </div>
  );
};
export default withAuth(IntershipsPage1);
