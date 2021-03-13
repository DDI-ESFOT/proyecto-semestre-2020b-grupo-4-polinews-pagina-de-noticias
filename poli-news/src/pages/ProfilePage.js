import React from 'react';
import Footer from '../components/Footer';
import withAuth from '../hocs/withAuth';

const ProfilePage = () => {
	return (
		<>
			MI PERRFIL
			<Footer />
		</>
	);
};

export default withAuth(ProfilePage);
