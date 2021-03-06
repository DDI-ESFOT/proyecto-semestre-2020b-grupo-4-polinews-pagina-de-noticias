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
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              style={{ height: "fit-content", textDecoration: "none" }}
            >
              <div className="content">
                <Row className="content" justify="center">
                  <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <p className="my-text" style={{ color: "#ffbf0f" }}>
                      {item.title}
                    </p>
                    <p className="my-text">{item.text}</p>
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
            </a>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselNews;
