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
    <>
      <h1
        className="text-title"
        style={{ border: "2.5px solid #ffbf0f", margin: "5%" }}
      >
        PASANTIAS & VACANTES
      </h1>
      <div className="square-two">
        <Carousel autoplay>
          {interships.map((item) => {
            return (
              <Button
                type="link"
                style={{ height: "fit-content" }}
                onClick={(event) => {
                  handleClick(event.id);
                }}
              >
                <div className="content">
                  <Row className="content" justify="center">
                    <Col span={12}>
                      <p className="my-text" style={{ color: "#ffbf0f" }}>
                        {item.load}
                      </p>
                      <p className="my-text">{item.description}</p>
                    </Col>
                    <Col className="content" span={12}>
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
export default CarouselInterships;
