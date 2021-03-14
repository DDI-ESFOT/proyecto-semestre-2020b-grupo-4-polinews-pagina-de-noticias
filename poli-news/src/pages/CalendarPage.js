import React from 'react';
import Footer from '../components/Footer';
import withAuth from '../hocs/withAuth';

const CalendarPage = () => {
	return (
		<>
			<hr />
			<h1 className="my-title">CALENDARIO</h1>
			<hr />
			<Footer />
		</>
	);
};
export default withAuth(CalendarPage);
