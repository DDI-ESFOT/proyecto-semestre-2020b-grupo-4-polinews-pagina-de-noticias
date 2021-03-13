import React from 'react';
import { Col, Layout, Row, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';
import Routes from '../constants/Routes';
import buho_1 from '../images/buho_1.png';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, FolderOpenOutlined } from '@ant-design/icons';

const Footer = () => {
	const { Title } = Typography;
	const { Footer } = Layout;

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
	];

	const contactItems = [
		{
			href: 'https://web.whatsapp.com/',
			text: '0994942280',
			icon: <PhoneOutlined />,
		},
		{
			href: 'http://correo.epn.edu.ec/',
			text: 'polinews_oficial@epn.edu.ec',
			icon: <MailOutlined />,
		},
		{
			href: 'https://www.google.com.ec/maps',
			text: 'Av Good vibes and Good Life Oe2 - 110',
			icon: <EnvironmentOutlined />,
		},
		{
			href: 'https://www.google.com',
			text: 'Terminos y Condiciones',
			icon: <FolderOpenOutlined />,
		},
	];

	return (
		<Footer className="my-footer" style={{ textAlign: 'center' }}>
			<Row>
				<Col span={8}>
					<Title level={3}> POLINEWS</Title>
					<Image src={buho_1} width={420} />
				</Col>
				<Col span={8}>
					<Title level={3}>SERVICIOS</Title>
					{menuItems.map((item) => {
						return (
							<>
								<Title level={5}>
									<Link to={item.to}>{item.text}</Link>
								</Title>
							</>
						);
					})}
				</Col>
				<Col span={8}>
					<Title level={3}>CONTACTOS</Title>
					{contactItems.map((item) => {
						return (
							<>
								<Title level={5}>
									<a href={item.href} target="_blank" rel="noreferrer noopener">
										{item.icon} {item.text}
									</a>
								</Title>
							</>
						);
					})}
				</Col>
			</Row>
			<Title level={5}>PoliNews ©2021 All rigth reserved</Title>
		</Footer>
	);
};
export default Footer;
