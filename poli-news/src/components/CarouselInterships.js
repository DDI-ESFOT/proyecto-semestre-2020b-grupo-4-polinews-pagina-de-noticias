import React from "react";
import { Carousel, Button, Row, Col, Image } from "antd";
import { useAuth } from "../lib/Auth";
import { useHistory } from "react-router-dom";

const CarouselInterships = () => {
  const { interships } = useAuth();
  let history = useHistory();

  const handleClick = async (uid) => {
    console.log("HURRA!", uid);
    history.push(`interships_level1${uid}`);
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
          {interships.map((intership) => {
            return (
              <Button
                type="link"
                style={{ height: "fit-content" }}
                onClick={(event) => {
                  handleClick(intership.id);
                }}
              >
                <div className="content">
                  <Row className="content" justify="center">
                    <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
                      <p className="my-text" style={{ color: "#ffbf0f" }}>
                        {intership.load}
                      </p>
                      <p className="my-text">{intership.description}</p>
                    </Col>
                    <Col className="content"  xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Image
                        src={intership.photo}
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
