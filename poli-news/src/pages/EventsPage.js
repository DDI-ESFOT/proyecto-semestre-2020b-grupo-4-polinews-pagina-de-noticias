import React from "react";
import withAuth from "../hocs/withAuth";
import Footer from "../components/Footer";
import CardsEvents from "../components/CardsEvents";
import SectionContacts from "../components/SectionContacts";
const EventsPage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">EVENTOS</h1>
      <hr />
      EVENTOS
      <div className="square-two">
        <CardsEvents />
      </div>
      <SectionContacts />
      <Footer />
    </>
  );
};
export default withAuth(EventsPage);
