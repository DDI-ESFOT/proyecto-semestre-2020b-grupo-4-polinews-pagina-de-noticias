import React from 'react';
import Footer from '../components/Footer';
import withAuth from '../hocs/withAuth';

const CoursersPage = () => {
	return (
		<>
			<hr />
			<h1 className="my-title">CURSOS</h1>
			<hr />
			<Footer />
		</>
	);
};
export default withAuth(CoursersPage);
