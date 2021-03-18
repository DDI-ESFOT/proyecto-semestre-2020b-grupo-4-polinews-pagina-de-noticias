import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useAuth } from "../lib/Auth";
import { useHistory } from "react-router-dom";
import Routes from "../constants/Routes";

const CardsCourses = () => {
  const { Meta } = Card;
  const { courses } = useAuth();

  let history = useHistory();

  const handleClick = async (id) => {
    console.log("Huraaaaaaa", id);
    history.push({
      pathname: Routes.COURSERS_ONE,
      search: "?query=abc",
      state: { id: " " },
    });
  };

  return (
    <>
      <div className="site-card-wrapper">
        <Row justify="center">
          {courses.map((course, index) => {
            return (
              <Button
                style={{ height: "fit-content" }}
                onClick={(event) => {
                  handleClick(event.id);
                }}
              >
                <Col span={8} key={index}>
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
                        course.date[0].toDate() +
                        "                     " +
                        " Hasta:  " +
                        course.date[1].toDate() +
                        "                     " +
                        course.description
                      }
                      //description={" Hasta " + course.date[1].toDate()}
                      //description={course.description}
                    />
                    <br />
                    <br />
                    <Button> INSCRIBIRSE </Button>
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
