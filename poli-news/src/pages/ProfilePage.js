import React from 'react';
import Footer from '../components/Footer';
import ProfileInfo from '../components/ProfileInfo';
import withAuth from '../hocs/withAuth';

const ProfilePage = () => {
	return (
		<>
			<hr />
			<h1 className="my-title">POLINEWS</h1>
			<hr />

			<div className="square-two">
				<ProfileInfo />
			</div>
			<Footer />
		</>
	);
};

export default withAuth(ProfilePage);
