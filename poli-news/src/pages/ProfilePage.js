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
};

export default withAuth(ProfilePage);
