import React from "react";
import withAuth from "../hocs/withAuth";
import { Col, Image, Row } from "antd";
import Footer from "../components/Footer";
import CardsInterships from "../components/CardsInterships";
import SocialMedia from "../components/SocialMedia";
import SectionIntershipsOffer from "../components/SectionIntershipsOffer";

const IntershipsPage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">PASANTIAS & VACANTES</h1>
      <hr />
      <div className="square-two">
        <CardsInterships />
      </div>

      <div>
        <SectionIntershipsOffer />
      </div>

      <div>
        <SocialMedia />
      </div>

      <Footer />
    </>
  );
};
export default withAuth(IntershipsPage);
