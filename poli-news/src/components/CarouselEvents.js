import React from 'react';
import { Carousel, Typography, Row, Col } from 'antd';

const CarouselEvents = () => {
	const { Title } = Typography;

	return (
		<Carousel autoplay>
			{news.map((item) => {
				return (
					<>
						<Row
							justify="center"
							style={{
								marginTop: '2%',
								textAlign: 'center',
								alignContent: 'center',
								marginLeft: '6%',
							}}
						>
							<Col span={12}>
								<Title>{item.title}</Title>
								<Title level={3}>{item.text}</Title>
							</Col>
							<Col span={12}>
								<Image width={400} src={item.src} />
							</Col>
						</Row>
					</>
				);
			})}
		</Carousel>
	);
};
export default CarouselEvents;
