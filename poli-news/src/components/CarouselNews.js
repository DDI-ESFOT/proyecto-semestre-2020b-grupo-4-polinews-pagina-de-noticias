import React from "react";
import { useAuth } from "../lib/Auth";
import { Row, Col, Image, Carousel } from "antd";

const CarouselNews = () => {
  const { news } = useAuth();

  return (
    <div className="square-two">
      <Carousel autoplay>
        {news.map((item) => {
          return (
            <div className="content">
              <Row className="content" justify="center">
                <Col span={12}>
                  <p className="my-text" style={{ color: "#ffbf0f" }}>
                    {item.title}
                  </p>
                  <p className="my-text">{item.text}</p>
                </Col>
                <Col className="content" span={12}>
                  <Image
                    src={item.src}
                    style={{
                      height: "100%",
                      width: "100%",
                      maxHeight: "350px",
                    }}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselNews;
