import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";

const MainMenu = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
      <Menu.Item key="1">
        <Link to={Routes.HOME}>Inicio</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={Routes.EVENTS}>Eventos</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={Routes.COURSERS}>Cursos</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to={Routes.INTERSHIPS}>Pasantias & Ofertas</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to={Routes.CALENDAR}>Calendario</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to={Routes.HOME}>Iniciar Sesion</Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to={Routes.REGISTER}>Registrarse</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
