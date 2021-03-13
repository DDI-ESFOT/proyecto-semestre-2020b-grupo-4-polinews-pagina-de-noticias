import React from 'react';
import { Col, Layout, Row, Typography, Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import buho_1 from '../images/buho_1.png';
import { useAuth } from '../lib/Auth';
import menuItems from '../constants/Items';
import contactItems from '../constants/Contacts';
import menuLogout from '../constants/ItemsLogout';

const Footer = () => {
	const { user } = useAuth();
	const { Title } = Typography;
	const { Footer } = Layout;

	return (
		<Footer className="my-footer" style={{ textAlign: 'center' }}>
			<Row>
				<Col span={8}>
					<Title level={3}> POLINEWS</Title>
					<Image src={buho_1} width={420} />
				</Col>
				<Col span={8}>
					<Title level={3}>SERVICIOS</Title>
					{user
						? menuItems.map((item) => {
								return (
									<>
										<Title level={5}>
											<Link to={item.to}>{item.text}</Link>
										</Title>
									</>
								);
						  })
						: menuLogout.map((item) => {
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
