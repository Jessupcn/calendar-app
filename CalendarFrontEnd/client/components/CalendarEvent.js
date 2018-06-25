import React from 'react';

export default function CalendarDay(props) {
  const event = props.event;

  return (
    <div id="eventOnCalendar">
      <p className="eventText">{event.name}</p>
    </div>
  );
}
