import React from "react";
import { Row, Col, Card } from "antd";
import buho_1 from "../images/buho_1.png";
import ander from "../images/ander.jpg";
import naty from "../images/naty.jpg";
import michael from "../images/michael.jpg";
import jose from "../images/jose.jpg";

const AboutUs = () => {

  const { Meta } = Card;

  const styleCard = { width: 250, border: '2.5px solid #ffbf0f' }

  return (
    <>
      <Row justify="center">
        <hr className="my-line" />
        <Col span={24}>
          <img src={buho_1} width={720} className="my-img" />
          <h1 className="my-title" style={{ marginTop: "11%" }}>
            EPN
          </h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <hr style={{ borderColor: '#ffbf0f' }} />
          <h1 className="my-title"> ¿QUIÉNES SOMOS ?</h1>
          <hr style={{ borderColor: '#ffbf0f' }} />
        </Col>
      </Row>

      <div style={{ margin: '2% 5%' }}>
        <Row justify="center" >
          <Col span={6}>
            <Card
              hoverable
              className="my-card"
              style={styleCard}
              cover={<img alt="Not Found Image" src={naty} />}
            >
              <Meta title="Nathaly Bermeo " description="Programmer" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              className="my-card"
              style={styleCard}
              cover={<img alt="Not Found Image" src={michael} />}
            >
              <Meta title="Michael Guanoluisa" description="Programmer" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              className="my-card"
              style={styleCard}
              cover={<img alt="Not Found Image" src={jose} />}
            >
              <Meta title="Jose Luis Colcha" description="Programmer" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              className="my-card"
              style={styleCard}
              cover={<img alt="Not Found Image" src={ander} />}
            >
              <Meta title="Anderson Cordova" description="Scrum Master" />
            </Card>
          </Col>
          <hr className="my-line" />
        </Row>
      </div>
    </>
  );
};

export default AboutUs;
