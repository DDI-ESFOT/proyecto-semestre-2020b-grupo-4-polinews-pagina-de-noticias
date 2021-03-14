import React from 'react';
import withAuth from '../hocs/withAuth';
import Footer from '../components/Footer';
import CardsEvents from '../components/CardsEvents';
import SeccionContacts from "../components/SeccionContacts";
const EventsPage = () => {
	return (
		<>
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
