import React from "react";
import { Col, Row, Image } from "antd";
import ContactsInfo from "../constants/ContactsInfo";
import FormIntershipsOffer from "./FormIntershipsOffer";

const SeccionIntershipsOffer = (indice) => {
  return (
    <div className="contacts" style={{ textAlign: "center" }}>
      <Row justify="center">
        <Col span={24}>
          <h1 className="my-title">{ContactsInfo[3].title}</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <Image src={ContactsInfo[3].src} width="100%" />
        </Col>

        <Col span={12}>
          <h1 className="my-text" style={{ color: "#ffbf0f" }}>
            {ContactsInfo[3].subtitle}
          </h1>
          <p className="my-text" style={{ textAlign: "top" }}>
            {ContactsInfo[3].text}
          </p>
          <FormIntershipsOffer />
        </Col>
      </Row>
    </div>
  );
};
export default SeccionIntershipsOffer;
