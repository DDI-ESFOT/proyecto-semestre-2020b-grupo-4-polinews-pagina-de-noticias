import React from "react";
import MenuProfile from "../components/MenuProfile";
import Footer from "../components/Footer";
import ProfileInfo from "../components/ProfileInfo";
import withAuth from "../hocs/withAuth";
import { Col, Row } from "antd";

const ProfilePage = () => {
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
          <ProfileInfo />
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default withAuth(ProfilePage);
