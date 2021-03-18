import React from "react";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";

const EventesLevelOnePage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">EVENTOS NIVEL UNO</h1>
      <hr />

      <Footer />
    </>
  );
};
export default withAuth(EventesLevelOnePage);