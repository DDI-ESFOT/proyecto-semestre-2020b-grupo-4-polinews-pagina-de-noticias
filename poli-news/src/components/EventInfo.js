import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import { useAuth } from "../lib/Auth";
import { useParams } from "react-router-dom";

const EventInfo = () => {
  console.log("USE PARAMS", useParams());
  const { id } = useParams();

  const { fetchDataEvent } = useAuth();
  const [event, setEvent] = useState([]);

  const dataEvent = async () => {
    const data = await fetchDataEvent(id);
    setEvent(data);
  };

  useEffect(() => {
    dataEvent();
  }, [id]);

  const onClick = () => {
    console.log("INSCRIBIRME");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Row className="content" justify="center">
          <Col span={24}>
            <h1 className="my-title">{event.name}</h1>
          </Col>

          <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
            <p
              className="my-text"
              style={({ textAlign: "top" }, { textAlign: "justify" })}
            >
              {event.description}
            </p>
          </Col>

          <Col   xs={24} sm={12} md={12} lg={12} xl={12}>
            <Image src={event.photo} width="75%" />
          </Col>
        </Row>

        <Row className="contacts">
          <Col span={24}>
            <h1 className="my-text">SILABO</h1>
          </Col>

          <Col   xs={24} sm={12} md={12} lg={12} xl={12}>
            <p className="my-text" style={{ textAlign: "top" }}>
              {event.status}
            </p>
            <p className="my-text" style={{ textAlign: "top" }}>
              {event.description}
            </p>
          </Col>

          <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
            <Image src={event.photo} width="75%" />
            <p>{event.name}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EventInfo;
