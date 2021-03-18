import React from "react";
import { Button, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/Auth";
import Routes from "../constants/Routes";
import menuItems from "../constants/Items";
import menuLogout from "../constants/ItemsLogout";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  CalendarOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  SaveOutlined,
} from "@ant-design/icons";

const MainMenu = () => {
  const { user, logout } = useAuth();
  //const { SubMenu } = Menu;

  console.log("USER", user);
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

          <SubMenu
            className="menu-profile"
            theme={"dark"}
            icon={<Avatar src={user.avatar} size={60} />}
            title="MI PERFIL"
            style={{ float: "right" }}
          >
            <Menu.Item key="1" icon={<CalendarOutlined />}>
              <Link to={Routes.PROFILE_CALENDAR}>Agenda</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<NotificationOutlined />}>
              <Link to={Routes.PROFILE_NOTE}>Notificaciones</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<MenuUnfoldOutlined />}>
              <Link to={Routes.PROFILE_COURSES}>Mis Cursos</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<SaveOutlined />}>
              <Link to={Routes.PROFILE}>información Personal</Link>
            </Menu.Item>
          </SubMenu>
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
