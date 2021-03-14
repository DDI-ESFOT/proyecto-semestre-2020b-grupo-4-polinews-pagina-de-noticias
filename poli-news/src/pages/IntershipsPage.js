import React from 'react';
import withAuth from '../hocs/withAuth';
import { Col, Image, Row } from 'antd';
import FormEvent from '../components/FormEvent';
import FormIntershipsOfer from '../components/FormIntershipsOfer';
import Footer from '../components/Footer';

const IntershipsPage = () => {
	return (
		<>
			<hr />
			<h1 className="my-title">PASANTIAS & VACANTES</h1>
			<hr />
			<Row justify="center">
				<Col>
					<h1>Ofertar pasantias</h1>
					<FormIntershipsOfer></FormIntershipsOfer>
				</Col>
			</Row>
			<Footer />
		</>
	);
};
export default withAuth(IntershipsPage);
