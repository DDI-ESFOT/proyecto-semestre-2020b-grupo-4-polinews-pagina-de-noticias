import React from 'react';
import withAuth from '../hocs/withAuth';
import Footer from '../components/Footer';
import CardsEvents from '../components/CardsEvents';
const EventsPage = () => {
	return (
		<>
			<hr />
			<h1 className="my-title">EVENTOS</h1>
			<hr />
			<div className="square-two">
				<CardsEvents />
			</div>
			<Footer />
		</>
	);
};
export default withAuth(EventsPage);
