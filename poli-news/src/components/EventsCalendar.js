import React, { useState } from "react";

import { Calendar } from "antd";

export default function GlobalCalendar(props) {
  const [value, setValue] = useState();

  const getEvent = (value) => {
    const event = props.events.find((element) => element.date == value.date());
    return event || null;
  };

  const Content = ({ value, event }) => {
    return (
      <div
        style={{
          borderRadius: 10,
          textAlign: "center",
          border: "2px dotted #BEC4C4",
          borderRadius: "20px",
        }}
      >
        {event.name}
      </div>
    );
  };

  function dateCellRender(value) {
    const event = getEvent(value);

    return event ? <Content event={event} value={value} /> : <></>;
  }

  const onSelect = (newValue) => {
    setValue(value ? newValue : undefined);
  };

  return (
    <Calendar
      dateCellRender={dateCellRender}
      value={value}
      onSelect={(selected) => {
        const evt = getEvent(selected);
        props.onSelect(evt);
      }}
    />
  );
}
