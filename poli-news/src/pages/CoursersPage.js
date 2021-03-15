import React from "react";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";
import FormCoursesOffer from "../components/FormCoursesOffer";

const CoursersPage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">CURSOS</h1>
      <hr />
      <FormCoursesOffer></FormCoursesOffer>

      <Footer />
    </>
  );
};
export default withAuth(CoursersPage);
