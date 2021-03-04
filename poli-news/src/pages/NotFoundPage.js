import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";

const NotFoundPage = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Lo sentimos no encontramos el sitio, intenta denuevo"
        extra={
          <Button type="link">
            <Link to={Routes.HOME}> Volver al inicio </Link>
          </Button>
        }
      />
    </>
  );
};
export default NotFoundPage;
