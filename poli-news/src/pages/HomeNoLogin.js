import React, { useState } from 'react';
import { Row, Col, Image, Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import Routes from '../constants/Routes';
import withoutAuth from '../hocs/withoutAuth';
import Footer from '../components/Footer';

const HomeNoLogin = () => {
	const oferItems = [
		{
			title: '',
			subtitle: '',
			text: '',
			src: '',
		},
		{
			title: '',
			subtitle: '',
			text: '',
			src: '',
		},
	];
	return (
		<>
			<div align="center">
				<br />
				<h1 style={{ marginBottom: '15' }}> POLINEWS </h1>
				<br />
				<br />
				<br />
				<h2 align="center">La mejor información en el</h2>
				<h2>mejor espacio</h2>
				<br />
				<Button type="primary" htmlType="submit">
					<Link to={Routes.REGISTER}>Registrarse</Link>
				</Button>

				<br />
				<br />
			</div>

			<Footer />
		</>
	);
};
export default withoutAuth(HomeNoLogin);
