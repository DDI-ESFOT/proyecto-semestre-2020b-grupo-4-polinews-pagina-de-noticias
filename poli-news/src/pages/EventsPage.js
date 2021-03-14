import React from 'react';
import withAuth from '../hocs/withAuth';
import Footer from '../components/Footer';
import CardsEvents from '../components/CardsEvents';
import SeccionContacts from '../components/SeccionContacts';
const EventsPage = () => {
	return (
		<>
			<hr />
			<h1 className="my-title">EVENTOS</h1>
			<hr />
			EVENTOS
			<div className="square-two">
				<CardsEvents />
			</div>
			<SeccionContacts />
			<Footer />
		</>
	);
};
export default withAuth(EventsPage);
