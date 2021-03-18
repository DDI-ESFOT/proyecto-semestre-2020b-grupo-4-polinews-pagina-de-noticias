import React from "react";
import { Carousel, Row, Col, Image, Button } from "antd";
import { useAuth } from "../lib/Auth";
import { useHistory } from "react-router-dom";

const CarouselEvents = () => {
  const { events } = useAuth();
  let history = useHistory();

  const handleClick = async (uid) => {
    console.log("ID DE Carousel Event", uid);
    history.push(`events_level1${uid}`);
  };

  return (
    <>
      <h1
        className="text-title"
        style={{ border: "2.5px solid #ffbf0f", margin: "5%" }}
      >
        EVENTOS
      </h1>
      <div className="square-two">
        <Carousel autoplay>
          {events.map((event) => {
            console.log("MI ID", event.id);
            return (
              <>
                <Button
                  type="link"
                  style={{ height: "fit-content" }}
                  onClick={() => {
                    handleClick(event.id);
                  }}
                >
                  <div className="content">
                    <Row className="content" justify="center">
                      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <p className="my-text" style={{ color: "#ffbf0f" }}>
                          {event.name}
                        </p>
                        <p className="my-text">{event.description}</p>
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
                          src={event.photo}
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
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default CarouselEvents;
