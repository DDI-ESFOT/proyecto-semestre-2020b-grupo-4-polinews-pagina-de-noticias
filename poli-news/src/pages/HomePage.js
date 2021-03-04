import React from "react";
import { Row, Col, Image } from "antd";
import FormEvent from "../components/FormEvent";
import FormRegister from "../components/FormRegister";

const HomePage = () => {
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h1>Crea tu propio evento e invita a nuestra comunidad</h1>
          <FormEvent></FormEvent>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Image
            width={200}
            src="https://www.conmishijos.com/assets/posts/7000/7942-nina-bailando.jpg"
          />
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
