<<<<<<< HEAD
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
=======
import React from "react";
import Footer from "../components/Footer";
import MenuProfile from "../components/MenuProfile";
import withAuth from "../hocs/withAuth";

const ProfilePage = () => {
  return (
    <>
      <MenuProfile />
      <Footer />
    </>
  );
>>>>>>> dd1ed61415b0fdaea6e3232bf5925f7c5d537e73
};

export default withAuth(ProfilePage);
