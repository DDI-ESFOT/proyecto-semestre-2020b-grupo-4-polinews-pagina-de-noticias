import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useAuth } from "../lib/Auth";
import { useHistory } from "react-router-dom";

const CardsEvents = () => {
  const { Meta } = Card;
  const { events } = useAuth();
  let history = useHistory();

  const handleClick = async (uid) => {
    console.log("HURRA!", uid);
    history.push(`events_level1${uid}`);
  };

  return (
    <>
      <div className="site-card-wrapper">
        <Row justify="center">
          {events.map((event, index) => {
            return (
              <Button
                style={{ height: "fit-content" }}
                onClick={() => {
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
                      width: 350,
                      textAlign: "center",
                      backgroundColor: "#151f33",
                      marginTop: "2%",
                      //color: '#ffffff',
                    }}
                    cover={
                      <img
                        alt="Not Found Image"
                        style={{ height: "350px", width: "350px" }}
                        src={event.photo}
                      />
                    }
                  >
                    <Meta
                      title={event.name}
                      description={
                        "Empieza:  " +
                        event.date[0].toDate() +
                        "                     " +
                        " Hasta:  " +
                        event.date[1].toDate() +
                        "                     " +
                        event.description
                      }
                      //description={" Hasta " + event.date[1].toDate()}
                      //description={event.description}
                    />
                    <br />
                    <br />
                    <Button> INSCRIBIRSE </Button>
                  </Card>
                </Col>
              </Button>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default CardsEvents;
