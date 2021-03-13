import React from 'react';
import withAuth from '../hocs/withAuth';
import Footer from '../components/Footer';
import CardsEvents from '../components/CardsEvents';
const EventsPage = () => {
	return (
		<>
			EVENTOSS
			<div className="square-two">
				<CardsEvents />
			</div>
			<Footer />
		</>
	);
};
export default withAuth(EventsPage);
