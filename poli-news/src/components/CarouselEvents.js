import React from "react";
import { Carousel, Row, Col, Image } from "antd";
import { useAuth } from "../lib/Auth";

const CarouselEvents = () => {
  const { events } = useAuth();

  return (
    <Carousel autoplay>
      {events.map((item) => {
        return (
          <>
            <Row className="content" justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.name}
                </p>
                <p className="my-text">{item.description}</p>
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
export default CarouselEvents;
