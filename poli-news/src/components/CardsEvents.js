import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useAuth } from "../lib/Auth";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";

const CardsEvents = () => {
  const { Meta } = Card;
  const { events } = useAuth();

  return (
    <>
      <div className="square-two">
        <Link to={Routes.EVENTS_LEVEL1}>
          <div className="site-card-wrapper" style={{ padding: "2px" }}>
            <Row justify="center">
              {events.map((event, index) => {
                console.log("Time", event.time);
                return (
                  <Col span={8} key={index}>
                    <Card
                      title={event.name}
                      bordered={false}
                      hoverable
                      className="my-card"
                      style={{
                        width: 300,
                        textAlign: "center",
                        backgroundColor: "#151f33",
                        margin: "10%",
                      }}
                      cover={
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            maxHeight: "200px",
                          }}
                          alt="Not Found Image"
                          src={event.photo}
                        />
                      }
                    >
                      <Meta
                        title={
                          "Empieza       " +
                          event.time.toDate().getHours() +
                          ":" +
                          event.time.toDate().getMinutes()
                        }
                        description={event.description}
                        action={<Button> ASISTIRE </Button>}
                      />
                      <Button> ASISTIRE </Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardsEvents;
