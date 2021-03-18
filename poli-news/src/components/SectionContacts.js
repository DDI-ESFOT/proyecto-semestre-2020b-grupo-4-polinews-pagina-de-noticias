import React from "react";
import { Col, Row, Image, Button } from "antd";
import ContactsInfo from "../constants/ContactsInfo";
import FormEvent from "./FormEvent";

const SeccionContacts = (indice) => {
  return (
    <div className="contacts" style={{ textAlign: "center" }}>
      <Row justify="center">
        <Col span={24}>
          <h1 className="my-title">{ContactsInfo[0].title}</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Image src={ContactsInfo[0].src} width="100%" />
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <h1 className="my-text" style={{ color: "#ffbf0f" }}>
            {ContactsInfo[0].subtitle}
          </h1>
          <p className="my-text" style={{ textAlign: "top" }}>
            {ContactsInfo[0].text}
          </p>
          <FormEvent />
        </Col>
      </Row>
    </div>
  );
};
export default SeccionContacts;
