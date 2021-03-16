import React from 'react';
import withAuth from '../hocs/withAuth';
import Footer from '../components/Footer';
import CardsEvents from '../components/CardsEvents';
import SeccionContacts from '../components/SeccionContacts';
import SocialMedia from '../components/SocialMedia';

const EventsPage = () => {
	return (
		<>
			<hr />
			<h1 className="my-title">EVENTOS</h1>
			<hr />

			<div className="square-two">
				<CardsEvents />
			</div>

			<div>
				<SeccionContacts />
			</div>

			<div>
				<SocialMedia />
			</div>

			<Footer />
		</>
	);
};
export default withAuth(EventsPage);
