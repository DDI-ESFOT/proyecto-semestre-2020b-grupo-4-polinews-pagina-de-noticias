import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import { useAuth } from "../lib/Auth";
import { useParams } from "react-router-dom";

const IntershipInfo = () => {
  const { id } = useParams();
  const { fetchDataIntership } = useAuth();
  const [intership, setIntership] = useState([]);

  const dataIntership = async () => {
    const data = await fetchDataIntership(id);
    setIntership(data);
  };

  useEffect(() => {
    dataIntership();
  }, [id]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Row className="content" justify="center">
          <Col span={24}>
            <h1 className="my-title">{intership.load}</h1>
          </Col>

          <Col span={12}>
            <p
              className="my-text"
              style={({ textAlign: "top" }, { textAlign: "justify" })}
            >
              {intership.description}
            </p>
          </Col>

          <Col span={12}>
            <Image src={intership.photo} width="75%" />
          </Col>
        </Row>

        <Row className="contacts">
          <Col span={24}>
            <h1 className="my-text">SILABO</h1>
          </Col>

          <Col span={12}>
            <p className="my-text" style={{ textAlign: "top" }}>
              {intership.company_name}
            </p>
            <p className="my-text" style={{ textAlign: "top" }}>
              {intership.direction}
            </p>
          </Col>

          <Col span={12}>
            <Image src={intership.photo} width="75%" />
            <p>{intership.manager_name}</p>
            <p>{intership.email}</p>{" "}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default IntershipInfo;
