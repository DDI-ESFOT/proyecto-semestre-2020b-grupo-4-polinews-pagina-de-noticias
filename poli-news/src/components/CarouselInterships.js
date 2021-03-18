import React from "react";
import { Carousel, Button, Row, Col, Image } from "antd";
import { useAuth } from "../lib/Auth";
import Routes from "../constants/Routes";
import { useHistory } from "react-router-dom";

const CarouselInterships = () => {
  const { interships } = useAuth();
  let history = useHistory();

  const handleClick = async (id) => {
    console.log("Huraaaaaaa", id);
    history.push({
      pathname: Routes.INTERSHIPS_ONE,
      search: "?query=abc",
      state: { id: " " },
    });
  };

  return (
    <Carousel autoplay>
      {interships.map((item) => {
        return (
          <>
            <Button
              type="link"
              style={{ height: "fit-content" }}
              onClick={(event) => {
                handleClick(event.id);
              }}
            >
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
            </Button>
          </>
        );
      })}
    </Carousel>
  );
};
export default CarouselInterships;
