import React from 'react';
import withAuth from '../hocs/withAuth';
import { Row, Col, Image, Typography } from 'antd';
import FormEvent from '../components/FormEvent';
import CarouselNews from '../components/CarouselNews';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';
import CarouselEvents from '../components/CarouselEvents';
import CardsInterships from "../components/CardsInterships";
import CarouselInterships from "../components/CarouselInterships";
const HomePage = () => {
	const { Title } = Typography;

	return (
		<>
			<hr />
			<h1 className="my-title">POLINEWS</h1>
			<hr />
			<CarouselNews />
			<CarouselEvents />
			<CarouselInterships/>
			<SocialMedia />
			<Row justify="center">
				<Col>
					<Title>Crea tu propio evento e invita a nuestra comunidad</Title>
					<FormEvent></FormEvent>
				</Col>
				<Col>
					<Image width={400} src="https://www.conmishijos.com/assets/posts/7000/7942-nina-bailando.jpg" />
				</Col>
			</Row>
			<Footer />
		</>
	);
};
export default withAuth(HomePage);
