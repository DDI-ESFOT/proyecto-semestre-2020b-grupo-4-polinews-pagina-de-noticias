import React from "react";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";
import { Col, Row } from "antd";
import CarouselEvents from "../components/CarouselEvents";

const ProfileCalendarPage = () => {
  return (
    <div>
      <Row justify="center">
        <Col>
          <hr />
          <h1 className="my-title">POLINEWS</h1>
          <hr />
        </Col>
      </Row>

      <Row justify="center">
        <Col className="square-two" span={15}>
          <h1>Agenda</h1>
        </Col>
      </Row>
      <hr className="line-divition" />
      <div className="square-two">
        <CarouselEvents />
      </div>

      <Footer />
    </div>
  );
};
export default withAuth(ProfileCalendarPage);
