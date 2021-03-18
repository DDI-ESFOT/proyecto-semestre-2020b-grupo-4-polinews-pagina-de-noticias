import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";
import EventsCalendar from "../components/EventsCalendar";
import { Row, Col } from "antd";
import { useAuth } from "../lib/Auth";

const toCalendarEvents = (events) => {
  return events.map((event) => {
    return { ...event, date: event.date[0].toDate().getDate() };
  });
};

const CalendarPage = () => {
  const { fetchCalendarEvents } = useAuth();
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({ name: "asdad" });

  // useEffect(() => {
  //   console.log('changed to',selectedEvent.name);
  // }, [selectedEvent])

  useEffect(() => {
    console.log("calendarEvents:", calendarEvents);
  }, [calendarEvents]);

  const pupulateCalendar = async () => {
    const events = await fetchCalendarEvents();
    setCalendarEvents(toCalendarEvents(events));
  };

  useEffect(() => {
    pupulateCalendar();
  }, []);

  return (
    <>
      <hr />
      <h1 className="my-title">CALENDARIO</h1>
      <hr />

      <div style={{ margin: "0 10%" }}></div>
      <Row>
        <Col span={12}>
          <EventsCalendar
            events={calendarEvents}
            onSelect={(element) => {
              setSelectedEvent(element);
            }}
          />
        </Col>
        <Col span={12}>
          <div
            style={{
              paddingTop: 150,
              background: "white",
              height: "100%",
              width: "100%",
            }}
          >
            {
              <div
                style={{
                  color: "black",
                  textAlign: "center",
                }}
              >
                {selectedEvent ? selectedEvent.name : "No evento"}
              </div>
            }
          </div>
        </Col>
      </Row>

      <Footer />
    </>
  );
};
export default withAuth(CalendarPage);
