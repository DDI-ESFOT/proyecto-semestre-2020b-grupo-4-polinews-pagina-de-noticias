import React from 'react';
import withAuth from '../hocs/withAuth';
import CarouselNews from '../components/CarouselNews';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';
import CarouselEvents from '../components/CarouselEvents';
import CarouselInterships from '../components/CarouselInterships';
import CarouselCourses from '../components/CarouselCourses';
import SectionContacts from '../components/SectionContacts';
import AboutUs from '../components/AboutUs';

const HomePage = () => {

	return (
		<>
			<hr />
			<h1 className="my-title">POLINEWS</h1>
			<hr />

			<div className="square-two">
				<CarouselNews />
			</div>

			<div className="square-two">
				<CarouselEvents />
			</div>

			<div className="square-two">
				<CarouselInterships />
			</div>

			<div className="square-two">
				<CarouselCourses />
			</div>

			<div>
				<SocialMedia indice={0} />
			</div>

			<div>
				<SectionContacts />
			</div>

			<div>
				<AboutUs />
			</div>

			<Footer />
		</>
	);
};
export default withAuth(HomePage);