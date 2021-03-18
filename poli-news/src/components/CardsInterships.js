import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useAuth } from "../lib/Auth";
import Routes from "../constants/Routes";
import { useHistory } from "react-router-dom";

const CardsInterships = () => {
  const { Meta } = Card;
  const { interships } = useAuth();
  let history = useHistory();

  const handleClick = async (uid) => {
    console.log("HURRA!", uid);
    history.push(`interships_level1${uid}`);
  };

  return (
    <>
      <div className="site-card-wrapper">
        <Row justify="center">
          {interships.map((intership, index) => {
            return (
              <Button
                type="link"
                style={{ height: "fit-content" }}
                onClick={(event) => {
                  handleClick(intership.id);
                }}
              >
                <Col key={index} xs={24} sm={2} md={2} lg={2} xl={2}>
                  <Card
                    title={intership.load}
                    bordered={false}
                    hoverable
                    className="my-card"
                    style={{
                      width: 300,
                      textAlign: "center",
                      backgroundColor: "#151f33",
                      marginTop: "2%",
                      //color: '#ffffff',
                    }}
                    cover={<img alt="Not Found Image" src={intership.photo} />}
                  >
                    <Meta
                      title={
                        "Horario      " +
                        intership.duration[0].toDate().getHours() +
                        ":" +
                        intership.duration[0].toDate().getMinutes() +
                        "finaliza" +
                        intership.duration[1].toDate().getHours() +
                        ":" +
                        intership.duration[1].toDate().getMinutes()
                      }
                      description={intership.description}
                    />
                    <Button> Postulate ya! </Button>
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

export default CardsInterships;
