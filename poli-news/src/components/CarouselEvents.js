import React from "react";
import { Carousel, Row, Col, Image, Button } from "antd";
import { useAuth } from "../lib/Auth";
import { useHistory } from "react-router-dom";
import Routes from "../constants/Routes";

const CarouselEvents = () => {
  const { events } = useAuth();
  let history = useHistory();

  const handleClick = async (id) => {
    console.log("Huraaaaaaa", id);
    history.push({
      pathname: Routes.EVENTS_ONE,
      search: "?query=abc",
      state: { id: events.id },
    });
  };

  return (
    <Carousel autoplay>
      {events.map((item) => {
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
                    {item.name}
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
export default CarouselEvents;
