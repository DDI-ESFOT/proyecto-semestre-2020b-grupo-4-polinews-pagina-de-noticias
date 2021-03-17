import React from "react";
import CourseInfo from "../components/CourseInfo";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";

const CoursersLevelOnePage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">CURSO</h1>
      <hr />

      <div>
        <CourseInfo />
      </div>

      <Footer />
    </>
  );
};
export default withAuth(CoursersLevelOnePage);
