import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import { useAuth } from "../lib/Auth";
import { useParams } from "react-router-dom";

const CourseInfo = () => {
  console.log("USE PARAMS", useParams());
  const { id } = useParams();

  const { fetchDataCourse } = useAuth();
  const [course, setCourse] = useState([]);

  const dataCourse = async () => {
    const data = await fetchDataCourse(id);
    setCourse(data);
    console.log("SIII", data);
  };

  useEffect(() => {
    dataCourse();
  }, [id]);

  const onClick = () => {
    console.log("INSCRIBIRME");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Row className="content" justify="center">
          <Col span={24}>
            <h1 className="my-title">{course.courseName}</h1>
          </Col>

          <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
            <p
              className="my-text"
              style={({ textAlign: "top" }, { textAlign: "justify" })}
            >
              {course.description}
            </p>
          </Col>

          <Col   xs={24} sm={12} md={12} lg={12} xl={12}>
            <Image src={course.photo} width="75%" />
          </Col>
        </Row>

        <Row className="contacts">
          <Col span={24}>
            <h1 className="my-text">SILABO</h1>
          </Col>

          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <p className="my-text" style={{ textAlign: "top" }}>
              {course.silabo}
            </p>
          </Col>

          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Image src={course.photo} width="75%" />
            <p>{course.name}</p>
            <p>{course.email}</p>{" "}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CourseInfo;
