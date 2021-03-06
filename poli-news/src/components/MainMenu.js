import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";
 
const MainMenu = () => {

  const menuItems = [
  {
    to: Routes.HOME,
    text: "INICIO",
  },
  {
    to: Routes.EVENTS,
    text: "EVENTOS",
  },
  {
    to: Routes.COURSERS,
    text: "CURSOS",
  },
  {
    to: Routes.INTERSHIPS,
    text: "PASANTIAS & OFERTAS",
  },
  {
    to: Routes.CALENDAR,
    text: "CALENDARIO",
  },
  {
    to: Routes.LOGIN,
    text: "INICIO SESION",
  },
  {
    to: Routes.REGISTER,
    text: "REGISTRO",
  },
];

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
     {menuItems.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <Link to={item.to}>{item.text}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MainMenu;
