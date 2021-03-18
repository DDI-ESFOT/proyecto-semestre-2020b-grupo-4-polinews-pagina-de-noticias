import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";
import IntershipInfo from "../components/IntershipInfo";
import SocialMedia from "../components/SocialMedia";

const IntershipsPage1 = () => {
  return (
    <div>
      <hr />
      <h1 className="my-title">PASANTIAS & VACANTES</h1>
      <hr />

      <div className="square">
        <IntershipInfo />
      </div>

      <div>
        <SocialMedia />
      </div>
      <Footer />
    </div>
  );
};
export default withAuth(IntershipsPage1);
