import React from "react";
import { useAuth } from "../lib/Auth";
import { Carousel, Row, Col, Image, Button } from "antd";
import { useHistory } from "react-router-dom";
import Routes from "../constants/Routes";

const CarouselCourses = () => {
  const { courses } = useAuth();

  let history = useHistory();

  const handleClick = async (id) => {
    console.log("Huraaaaaaa", id);
    history.push({
      pathname: Routes.COURSERS_ONE,
      search: "?query=abc",
      state: { id: " " },
    });
  };

  return (
    <Carousel autoplay>
      {courses.map((item) => {
        return (
          <>
            <Button
              type="link"
              onClick={handleClick}
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
              </Row>
            </Button>
          </>
        );
      })}
    </Carousel>
  );
};
export default CarouselCourses;
