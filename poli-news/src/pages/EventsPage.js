import React from 'react';
import withAuth from '../hocs/withAuth';
import Footer from '../components/Footer';
import CardsEvents from '../components/CardsEvents';
const EventsPage = () => {
	return (
		<>
			EVENTOSS
			<CardsEvents />
			<Footer />
		</>
	);
};
export default withAuth(EventsPage);
