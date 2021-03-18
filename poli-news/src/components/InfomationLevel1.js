import React from "react";
import { Col, Row, Image } from "antd";
import computadora from "../images/react.jpg";

const InformationLevel1 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Row className="content" justify="center">
        <Col span={24}>
          <h1 className="my-title">Curso de REACT</h1>
        </Col>

        <Col span={12}>
          <p
            className="my-text"
            style={({ textAlign: "top" }, { textAlign: "justify" })}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>

        <Col span={12}>
          <Image src={computadora} width="75%" />
        </Col>
      </Row>

      <Row className="contacts">
        <Col span={24}>
          <h1 className="my-text">Silabo</h1>
        </Col>

        <Col span={12}>
          <p className="my-text" style={{ textAlign: "top" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>

        <Col span={12}>
          <Image src={computadora} width="75%" />
          <p>Ing. Byron Loarte</p>
          <p>byron.loarte@epn.edu.ec</p>{" "}
        </Col>
      </Row>
    </div>
  );
};
export default InformationLevel1;
