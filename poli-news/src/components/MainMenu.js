import React from 'react';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/Auth';
import Routes from '../constants/Routes';

const MainMenu = () => {
	const { user, logout } = useAuth();

	const menuItems = [
		{
			to: Routes.HOME,
			text: 'INICIO',
		},
		{
			to: Routes.EVENTS,
			text: 'EVENTOS',
		},
		{
			to: Routes.COURSERS,
			text: 'CURSOS',
		},
		{
			to: Routes.INTERSHIPS,
			text: 'PASANTIAS & OFERTAS',
		},
		{
			to: Routes.CALENDAR,
			text: 'CALENDARIO',
		},
		{
			to: Routes.PROFILE,
			text: 'MI PERFIL',
		},
		{
			to: Routes.HOME_NO_LOGIN,
			text: (
				<Button type="link" onClick={logout} style={{ color: '#a6adb4' }}>
					SALIR
				</Button>
			),
		},
	];

	const menuLogout = [
		{
			to: Routes.HOME_NO_LOGIN,
			text: 'INICIO',
		},
		{
			to: Routes.LOGIN,
			text: 'INICIO SESION',
		},
		{
			to: Routes.REGISTER,
			text: 'REGISTRO',
		},
	];

	return (
		<Menu theme="dark" mode="horizontal">
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
							<Menu.Item key={index}>
								<Link to={item.to}>{item.text}</Link>
							</Menu.Item>
						);
				  })}
		</Menu>
	);
};

export default MainMenu;
