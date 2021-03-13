import React, { useState } from 'react';
import { Row, Col, Image, Carousel, Button, Form } from 'antd';
import { Link } from 'react-router-dom';
import Routes from '../constants/Routes';

const HomeNoLogin = () => {
	const [isModalVisible, setIsModalVisible] = useState(true);

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const newsItems = [
		{
			src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			text: 'HOLAAAA SOY LA PRIMERA NOTICIAAAA & USTED NO HA INICIADO SESION',
		},
		{
			src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			text: 'HOLAAAA SOY LA SEGUNDAAAA NOTICIAAAA & USTED NO HA INICIADO SESION',
		},
	];

	return (
		<>
			<div align="center">
				<br />
				<h1> POLINEWS </h1>
				<br />
				<br />
				<br />
				<h2 align="center">La mejor información en el</h2>
				<h2>mejor espacio</h2>
				<br />
				<Button type="primary" htmlType="submit" onClick={handleCancel}>
					<Link to={Routes.REGISTER}>Registrarse</Link>
				</Button>

				<br />
				<br />
			</div>
			<Carousel autoplay>
				{newsItems.map((item) => {
					return (
						<>
							<Col xs={24} sm={24} md={12} lg={12} xl={12}>
								<h2>{item.text}</h2>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12} xl={12}>
								<Image width={200} src={item.src} />
							</Col>
						</>
					);
				})}
			</Carousel>
		</>
	);
};
export default withoutAuth(HomeNoLogin);
