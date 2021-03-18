import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";
import InformationLevel1 from "../components/InfomationLevel1";
import SocialMedia from "../components/SocialMedia";
import CourseInfo from "../components/CourseInfo";

const CoursesPage1 = () => {
  return (
    <div>
      <hr />
      <h1 className="my-title">CURSOS</h1>
      <hr />

      <hr className="line-divition" />

      <CourseInfo />
      <SocialMedia />
      <Footer />
    </div>
  );
};
export default withAuth(CoursesPage1);
