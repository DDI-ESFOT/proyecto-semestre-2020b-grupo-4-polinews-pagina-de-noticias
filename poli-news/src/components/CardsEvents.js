import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useAuth } from "../lib/Auth";
import { useHistory } from "react-router-dom";
import Routes from "../constants/Routes";

const CardsEvents = () => {
  const { Meta } = Card;
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
    <>
      <div className="square-two">
        <div className="site-card-wrapper" style={{ padding: "2px" }}>
          <Row justify="center">
            {events.map((event, index) => {
              return (
                <Button
                  type="link"
                  style={{ height: "fit-content" }}
                  onClick={(event) => {
                    handleClick(event.id);
                  }}
                >
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
                </Button>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default CardsEvents;
