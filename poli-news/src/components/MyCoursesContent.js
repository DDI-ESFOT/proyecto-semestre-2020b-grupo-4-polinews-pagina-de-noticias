import React from "react";
import { Col, Row } from "antd";
import FormCoursesOffer from "./FormCoursesOffer";

const MyCoursesContent = () => {
  return (
    <div className="content">
      <Row>
        <Col span={24} >
          <hr />
          <h1 className="text-title">MIS CURSOS</h1>
          <hr />
        </Col>
      </Row>
      <br />
      <Row>
        <Col  xs={24} sm={5} md={5} lg={5} xl={5}>
          <p className="my-text">Curso Autocad</p>
        </Col>
      </Row>
      <Row>
        <Col  xs={24} sm={5} md={5} lg={5} xl={5}>
          <p className="my-text">Curso C++</p>
        </Col>
      </Row>
      <Row>
        <Col  xs={24} sm={5} md={5} lg={5} xl={5}>
          <p className="my-text">Introducción a JAVA</p>
        </Col>
      </Row>

      <br />
      <br />
      <br />
      <Row>
        <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
          <hr />
          <h1 className="text-title">CURSOS INSCRITOS</h1>
          <hr />
        </Col>
      </Row>
      <br />
      <Row>
        <Col  xs={24} sm={5} md={5} lg={5} xl={5}>
          <p className="my-text">Curso Autocad</p>
        </Col>
      </Row>
      <Row>
        <Col  xs={24} sm={5} md={5} lg={5} xl={5}>
          <p className="my-text">Curso C++</p>
        </Col>
      </Row>
      <Row>
        <Col  xs={24} sm={5} md={5} lg={5} xl={5}>
          <p className="my-text">Introducción a JAVA</p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <FormCoursesOffer />
        </Col>
      </Row>
    </div>
  );
};
export default MyCoursesContent;
