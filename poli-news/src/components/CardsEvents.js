import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { db } from '../firebase';

const CardsEvents = () => {
	const { Meta } = Card;
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetchEvents();
	}, []);

	const fetchEvents = async () => {
		try {
			const snap = await db.collection('events').get();
			const docs = snap.docs.map((doc, index) => {
				console.log('data', doc.data());
				return { ...doc.data(), key: index };
			});
			console.log(docs);
			setEvents(docs);
			console.log('EVENTS', docs);
		} catch (e) {
			console.log('ERROR', e);
		}
	};

	return (
		<>
			<div className="site-card-wrapper">
				<Row gutter={16} justify="center">
					{events.map((event, index) => {
						return (
							<Col span={8} key={index}>
								<Card
									title={event.name}
									bordered={false}
									hoverable
									style={{ width: 240 }}
									cover={
										<img
											alt="Not Fund image"
											src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=6&m=1223671392&s=612x612&w=0&h=5VMcL3a_1Ni5rRHX0LkaA25lD_0vkhFsb1iVm1HKVSQ="
										/>
									}
								>
									<Meta
										title={
											'Empieza       ' +
											event.time.toDate().getHours() +
											':' +
											event.date.toDate().getMinutes()
										}
										description={event.description}
										action={<Button> ASISTIRE </Button>}
									/>
									<Button> ASISTIRE </Button>
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>
		</>
	);
};

export default CardsEvents;
