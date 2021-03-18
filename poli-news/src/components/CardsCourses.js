import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useAuth } from "../lib/Auth";
import { useHistory } from "react-router-dom";

const CardsCourses = () => {
  const { Meta } = Card;
  const { courses } = useAuth();
  let history = useHistory();

  const handleClick = async (uid) => {
    console.log("HURRA!", uid);
    history.push(`coursers_level1${uid}`);
  };

  return (
    <>
      <div className="site-card-wrapper">
        <Row justify="center">
          {courses.map((course, index) => {
            return (
              <Button
                type="link"
                style={{ height: "fit-content" }}
                onClick={() => {
                  handleClick(course.id);
                }}
              >
                <Col  key={index} xs={24} sm={2} md={2} lg={2} xl={2}>
                  <Card
                    title={course.courseName}
                    bordered={false}
                    hoverable
                    className="my-card"
                    style={{
                      width: 350,
                      textAlign: "center",
                      backgroundColor: "#151f33",
                      marginTop: "2%",
                      //color: '#ffffff',
                    }}
                    cover={
                      <img
                        alt="Not Found Image"
                        style={{ height: "350px", width: "350px" }}
                        src={course.photo}
                      />
                    }
                  >
                    <Meta
                      title={"Profesor: " + course.name + course.lastName}
                      description={
                        "Empieza:  " +
                        course.date[0].toDate().getDate() +
                        "/" +
                        course.date[0].toDate().getMonth() +
                        "                     " +
                        " Hasta:  " +
                        course.date[1].toDate().getDate() +
                        "/" +
                        course.date[1].toDate().getMonth() +
                        "                     " +
                        course.description
                      }
                      //description={" Hasta " + course.date[1].toDate()}
                      //description={course.description}
                    />
                    <br />
                    <br />
                    <Button className="my-btn"> INSCRIBIRSE </Button>
                  </Card>
                </Col>
              </Button>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default CardsCourses;
