import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";
import CourseInfo from "../components/CourseInfo";

const CoursesPage1 = () => {
  return (
    <div>
      <hr />
      <h1 className="my-title">CURSOS</h1>
      <hr />

      <hr className="line-divition" />

      <div className="square">
        <CourseInfo />
      </div>

      <div>
        <SocialMedia />
      </div>

      <Footer />
    </div>
  );
};
export default withAuth(CoursesPage1);
