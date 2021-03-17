import React from "react";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";

const IntershipsLevelOnePage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">PASANTIAS NIVEL UNO</h1>
      <hr />

      <Footer />
    </>
  );
};
export default withAuth(IntershipsLevelOnePage);
