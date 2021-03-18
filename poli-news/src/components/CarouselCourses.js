import React from "react";
import { useAuth } from "../lib/Auth";
import { Carousel, Row, Col, Image } from "antd";

const CarouselCourses = () => {
  const { courses } = useAuth();

  return (
    <Carousel autoplay>
      {courses.map((item) => {
        return (
          <>
            <Row className="content" justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.courseName}
                </p>
                <p className="my-text">{item.description}</p>
                <br />
                <p className="my-text">Sílabo</p>
                <p className="my-text">{item.silabo}</p>
              </Col>
              <Col className="content" span={12}>
                <Image
                  src={item.photo}
                  style={{ height: "100%", width: "100%", maxHeight: "350px" }}
                />
              </Col>
            </Row>
          </>
        );
      })}
    </Carousel>
  );
};
export default CarouselCourses;
