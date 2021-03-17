import React from "react";
import { useAuth } from "../lib/Auth";
import { Row, Col, Image, Carousel } from "antd";

const CarouselNews = () => {

  const { news } = useAuth();

  return (
    <Carousel autoplay>
      {news.map((item) => {
        return (
          <>
            <Row justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.title}
                </p>
                <p className="my-text">{item.text}</p>
              </Col>
              <Col span={12}>
                <Image src={item.src} />
              </Col>
            </Row>
          </>
        );
      })}
    </Carousel>
  );
};
export default CarouselNews;
