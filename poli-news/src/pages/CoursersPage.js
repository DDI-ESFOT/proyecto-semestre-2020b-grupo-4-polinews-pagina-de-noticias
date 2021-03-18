import React from "react";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";
import SectionOfferCourses from "../components/SectionOfferCourses";
import CardsCourses from "../components/CardsCourses";
import SocialMedia from "../components/SocialMedia";

const CoursersPage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">CURSOS</h1>
      <hr />
      <div className="square-two">
        <CardsCourses />
      </div>

      <SectionOfferCourses />

      <div>
        <SocialMedia />
      </div>

      <Footer />
    </>
  );
};
export default withAuth(CoursersPage);
