import React from "react";
import { Button, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/Auth";
import Routes from "../constants/Routes";
import menuItems from "../constants/Items";
import menuLogout from "../constants/ItemsLogout";

const MainMenu = () => {

  const { user, logout } = useAuth();

  console.log('USER', user);
  return (
    <Menu theme="dark" mode="horizontal" style={{ fontSize: "1.2rem" }}>
      {user
        ? menuItems.map((item, index) => {
          return (
            <>
              <Menu.Item key={index}>
                <Link to={item.to}>{item.text}</Link>
              </Menu.Item>
            </>
          );
        })
        : menuLogout.map((item, index) => {
          return (
            <>
              <Menu.Item key={index} style={{ float: "right" }}>
                <Link to={item.to}>{item.text}</Link>
              </Menu.Item>
            </>
          );
        })}
      {user ? (
        <>
          <Menu.Item style={{ float: "right" }}>
            <Link to={Routes.HOME_NO_LOGIN}>
              <Button
                type="link"
                onClick={logout}
                style={{ color: "#a6adb4", fontSize: "1.2rem" }}
              >
                SALIR
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ float: "right" }}>
            <Link to={Routes.PROFILE}>
              <Avatar src={user.avatar} size={60} />
              MI PERFIL
            </Link>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>
            <Link to={Routes.HOME_NO_LOGIN}>INICIO</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default MainMenu;
