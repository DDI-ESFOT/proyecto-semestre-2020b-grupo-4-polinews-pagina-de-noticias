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
            <Row justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.courseName}
                </p>
                <p className="my-text">{item.description}</p>
                <br />
                <p className="my-text">Sílabo</p>
                <p className="my-text">{item.silabo}</p>
              </Col>
              <Col span={12}>
                <Image src={item.photo} />
              </Col>
            </Row>
          </>
        );
      })}
    </Carousel>
  );
};
export default CarouselCourses;
