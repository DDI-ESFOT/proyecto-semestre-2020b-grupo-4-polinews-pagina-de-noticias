import React from "react";
import { Col, Row, Image, Button } from "antd";
import ContactsInfo from "../constants/ContactsInfo";
import FormCoursesOffer from "./FormCoursesOffer";

const SeccionOfferCourses = (indice) => {
  return (
    <div className="contacts" style={{ textAlign: "center" }}>
      <Row justify="center">
        <Col span={24} >
          <h1 className="my-title">{ContactsInfo[2].title}</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
          <Image src={ContactsInfo[2].src} width="100%" />
        </Col>

        <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
          <h1 className="my-text" style={{ color: "#ffbf0f" }}>
            {ContactsInfo[2].subtitle}
          </h1>
          <p className="my-text" style={{ textAlign: "top" }}>
            {ContactsInfo[2].text}
          </p>
          <FormCoursesOffer />
        </Col>
      </Row>
    </div>
  );
};
export default SeccionOfferCourses;
