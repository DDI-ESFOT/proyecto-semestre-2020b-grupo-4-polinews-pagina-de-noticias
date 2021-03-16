import React from "react";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";
import FormCoursesOffer from "../components/FormCoursesOffer";
import CardsCourses from "../components/CardsCourses";

const CoursersPage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">CURSOS</h1>
      <hr />
      <FormCoursesOffer />
      <CardsCourses />

      <Footer />
    </>
  );
};
export default withAuth(CoursersPage);
