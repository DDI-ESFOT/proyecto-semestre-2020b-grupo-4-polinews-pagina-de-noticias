import React from "react";
import { useAuth } from "../lib/Auth";
import { Carousel, Row, Col, Image, Button } from "antd";
import { useHistory } from "react-router-dom";

const CarouselCourses = () => {
  const { courses } = useAuth();
  let history = useHistory();

  const handleClick = async (uid) => {
    console.log("HURRA!", uid);
    history.push(`coursers_level1${uid}`);
  };

  return (
    <>
      <h1
        className="text-title"
        style={{ border: "2.5px solid #ffbf0f", margin: "5%" }}
      >
        CURSOS
      </h1>
      <div className="square-two">
        <Carousel autoplay>
          {courses.map((item) => {
            return (
              <Button
                type="link"
                onClick={() => {
                  handleClick(item.id);
                }}
                style={{ height: "fit-content" }}
              >
                <div className="content">
                  <Row className="content" justify="center">
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <p className="my-text" style={{ color: "#ffbf0f" }}>
                        {item.courseName}
                      </p>
                      <p className="my-text">{item.description}</p>
                      <br />
                      <p className="my-text">Sílabo</p>
                      <p className="my-text">{item.silabo}</p>
                    </Col>
                    <Col
                      className="content"
                      xs={24}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Image
                        src={item.photo}
                        style={{
                          height: "100%",
                          width: "100%",
                          maxHeight: "350px",
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              </Button>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default CarouselCourses;
