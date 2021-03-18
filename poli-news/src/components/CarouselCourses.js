import React from "react";
import { useAuth } from "../lib/Auth";
import { Carousel, Row, Col, Image, Button } from "antd";
import { useHistory } from "react-router-dom";
import Routes from "../constants/Routes";

const CarouselCourses = () => {
  const { courses } = useAuth();
  let history = useHistory();

  const handleClick = async (uid) => {
    console.log("HURRA!", uid);
    history.push(`coursers_level1${uid}`);
  };

  return (
    <Carousel autoplay>
      {courses.map((item) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                handleClick(item.id);
              }}
              style={{ height: "fit-content" }}
            >
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
                <h1>{item.id}</h1>
              </Row>
            </Button>
          </>
        );
      })}
    </Carousel>
  );
};
export default CarouselCourses;
