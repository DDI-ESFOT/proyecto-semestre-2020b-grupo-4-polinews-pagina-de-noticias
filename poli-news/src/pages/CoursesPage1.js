import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";

const CoursesPage1 = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};
export default withAuth(CoursesPage1);
