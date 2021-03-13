import { Row, Col, Typography, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../constants/Routes';
import buho_2 from '../images/buho_2.png';

const Welcome = () => {
	const { Title } = Typography;

	return (
		<Row justify="center">
			<Col span={24}>
				<img
					src={buho_2}
					width={777}
					style={{ position: 'absolute', left: '0px', right: '0px', margin: 'auto' }}
				/>
			</Col>
			<Row justify="center">
				<Col span={24} style={{ textAlign: 'center', marginTop: '40px' }}>
					<Title style={{ color: '#ffbf0f', fontSize: '4rem' }}>POLINEWS</Title>
					<Title style={{ color: '#ffffff' }}>La mejor información en el mejor espacio</Title>
					<Button
						type="primary"
						style={{ backgroundColor: '#ffbf0f', marginTop: '120px', marginBottom: '70px' }}
					>
						<Link to={Routes.REGISTER}> Registrarse</Link>
					</Button>
				</Col>
			</Row>
		</Row>
	);
};

export default Welcome;
