import { Row, Col } from "antd";
import React from "react";

const NotificationContent = () => {
  return (
    <div className="content">
      <Row>
        <Col span={1}>
          <h1 className="text-title">EVENTOS</h1>
        </Col>
      </Row>

      <hr className="line-divition" />

      <Row>
        <Col span={10}>
          <p className="my-text">Creo su nuevo Evento</p>
        </Col>

        <Col span={13}>
          <p className="my-text" style={{ textAlign: "right" }}>
            Hoy a las 21:36
          </p>
        </Col>
      </Row>
      <br />

      <Row>
        <Col span={1}>
          <h1 className="text-title">EVENTOS</h1>
        </Col>
      </Row>

      <hr className="line-divition" />

      <Row>
        <Col span={10}>
          <p className="my-text">Confirmo su asistencia a Polifest</p>
        </Col>
        <Col span={13}>
          <p className="my-text" style={{ textAlign: "right" }}>
            Hoy a las 21:40
          </p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={1}>
          <h1 className="text-title">CURSOS</h1>
        </Col>
      </Row>

      <hr className="line-divition" />

      <Row>
        <Col span={10}>
          <p className="my-text">Se inscribio en el curso de React</p>
        </Col>
        <Col span={13}>
          <p className="my-text" style={{ textAlign: "right" }}>
            Hoy a las 21:36
          </p>
        </Col>
      </Row>
      <br />
    </div>
  );
};
export default NotificationContent;
