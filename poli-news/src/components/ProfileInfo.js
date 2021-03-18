import React from "react";
import { Row, Col, Avatar } from "antd";
import { useAuth } from "../lib/Auth";
import withAuth from "../hocs/withAuth";

const ProfileInfo = () => {

  const { user } = useAuth();

  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Avatar
            src={user.avatar}
            size={420}
            style={{ border: "2.5px solid #ffbf0f" }}
          />
        </Col>
        <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
          <h1 className="text-title">
            Nombre:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.name}
            </h1>
          </h1>
          <h1 className="text-title">
            Apellido:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.lastname}
            </h1>
          </h1>
          <h1 className="text-title">
            Fecha de nacimiento:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {user.date.toDate().getDate() + '/' + user.date.toDate().getMonth() + '/' + user.date.toDate().getFullYear()}
            </h1>
          </h1>
          <h1 className="text-title">
            Correo electrónico:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.email}
            </h1>
          </h1>
          <h1 className="text-title">
            Tipo de Usuario:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.status}
            </h1>
          </h1>
          <h1 className="text-title">
            Teléfono:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.phone}
            </h1>
          </h1>
        </Col>
      </Row>
    </>
  );
};

export default withAuth(ProfileInfo);
