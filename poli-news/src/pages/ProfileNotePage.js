import React from "react";
import Footer from "../components/Footer";
import MenuProfile from "../components/MenuProfile";
import withAuth from "../hocs/withAuth";
import { Col, Row } from "antd";

const ProfileNotePage = () => {
  return (
    <div>
      <Row justify="center">
        <Col>
          <hr />
          <h1 className="my-title">POLINEWS</h1>
          <hr />
        </Col>
      </Row>

      <Row span={12}>
        <Col>
          <MenuProfile />
        </Col>

        <Col className="square-two" span={15}>
          <h1>Notificaciones</h1>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};
export default withAuth(ProfileNotePage);
