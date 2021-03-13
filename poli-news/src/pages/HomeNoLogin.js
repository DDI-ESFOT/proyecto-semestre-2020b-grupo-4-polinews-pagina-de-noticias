import React from 'react';
import { Row, Col, Image, Carousel } from 'antd';
import Footer from '../components/Footer';
import withoutAuth from '../hocs/withoutAuth';

const HomeNoLogin = () => {
	const newsItems = [];
	return (
		<>
			<Footer />
		</>
	);
};
export default withoutAuth(HomeNoLogin);
