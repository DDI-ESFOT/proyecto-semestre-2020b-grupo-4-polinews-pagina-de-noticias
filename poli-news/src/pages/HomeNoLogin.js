import React from 'react';
import withoutAuth from '../hocs/withoutAuth';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import SocialMedia from '../components/SocialMedia';

const HomeNoLogin = () => {
	return (
		<>
			<div className="square">
				<Welcome />
			</div>
			<SocialMedia />
			<Footer />
		</>
	);
};
export default withoutAuth(HomeNoLogin);
