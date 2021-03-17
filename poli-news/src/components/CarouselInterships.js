import React from "react";
import { Carousel, Typography, Row, Col, Image } from "antd";
import { useAuth } from "../lib/Auth";

const CarouselInterships = () => {

  const { interships } = useAuth();

  return (
    <Carousel autoplay>
      {interships.map((item) => {
        return (
          <>
            <Row justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.load}
                </p>
                <p className="my-text">{item.description}</p>
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
export default CarouselInterships;
