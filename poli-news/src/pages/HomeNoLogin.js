import React from 'react';
import { Row, Col, Image, Carousel } from 'antd';

const HomeNoLogin = () => {
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
export default HomeNoLogin;
