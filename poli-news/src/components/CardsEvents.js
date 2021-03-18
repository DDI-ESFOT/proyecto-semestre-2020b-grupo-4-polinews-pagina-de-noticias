import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useAuth } from "../lib/Auth";
import { useHistory } from "react-router-dom";
import FormEvent from "./FormEvent";

const CardsEvents = () => {
  const { Meta } = Card;
  const { events } = useAuth();
  let history = useHistory();

  const handleClick = async (uid) => {
    console.log("HURRA!", uid);
    history.push(`events_level1${uid}`);
  };

  const onClick = () => {
    return <FormEvent />;
  };
  return (
    <>
      <div className="site-card-wrapper">
        <Row justify="center">
          {events.map((event, index) => {
            return (
              <Button
                type="link"
                style={{ height: "fit-content" }}
                onClick={() => {
                  handleClick(event.id);
                }}
              >
                <Col  key={index} xs={24} sm={2} md={2} lg={2} xl={2}>
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
                        event.date[0].toDate().getDate() +
                        "/" +
                        event.date[0].toDate().getMonth() +
                        "                     " +
                        " Hasta:  " +
                        event.date[1].toDate().getDate() +
                        "/" +
                        event.date[1].toDate().getMonth() +
                        "                     " +
                        event.description
                      }
                      //description={" Hasta " + event.date[1].toDate()}
                      //description={event.description}
                    />
                    <br />
                    <br />
                    <Button className="my-btn" onClick={onClick}>
                      {" "}
                      INSCRIBIRSE{" "}
                    </Button>
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
