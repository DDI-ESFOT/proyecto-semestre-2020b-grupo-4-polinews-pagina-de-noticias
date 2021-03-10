import React from 'react';
import withAuth from '../hocs/withAuth';
import { Row, Col, Image, Carousel, Typography } from 'antd';
import FormEvent from '../components/FormEvent';
import FormIntershipsOfer from "../components/FormIntershipsOfer";

const HomePage = () => {
	const { Title } = Typography;
	const newsItems = [
		{
			src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			title: 'Soy un titulo',
			text: 'HOLAAAA SOY LA PRIMERA NOTICIAAAA',
		},
		{
			src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			title: 'Soy un titulo',
			text: 'HOLAAAA SOY LA SEGUNDAAAA NOTICIAAAA',
		},
		{
			src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			title: 'Soy un titulo',
			text: 'HOLAAAA SOY LA TERCERAAA NOTICIAAAA',
		},
	];
	return (
		<>
			<Carousel autoplay>
				{newsItems.map((item) => {
					return (
						<>
							<Row justify="center" style={{ marginTop: '2%' }}>
								<Col style={{ marginRight: '3%' }}>
									<Title>{item.title}</Title>
									<Title level={3}>{item.text}</Title>
								</Col>
								<Col>
									<Image width={350} src={item.src} />
								</Col>
							</Row>
						</>
					);
				})}
			</Carousel>

			<Row justify="center">
				<Col>
					<h1>Crea tu propio evento e invita a nuestra comunidad</h1>
					<FormEvent></FormEvent>

				</Col>
				<Col>
					<Image width={400} src="https://www.conmishijos.com/assets/posts/7000/7942-nina-bailando.jpg" />
				</Col>
			</Row>
		</>
	);
};
export default withAuth(HomePage);
