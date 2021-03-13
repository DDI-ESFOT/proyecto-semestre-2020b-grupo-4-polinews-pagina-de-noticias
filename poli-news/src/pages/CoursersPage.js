import React from 'react';
import Footer from '../components/Footer';
import withAuth from '../hocs/withAuth';

const CoursersPage = () => {
	return (
		<>
			CURSOS
			<Footer />
		</>
	);
};
export default withAuth(CoursersPage);
