import React from 'react';
// import { CalendarEvent } from './index';

export default function CalendarDay (props) {
  const event = props.event;

  return (
    <div id="eventOnCalendar">
      <p className="eventText" >{event.name}</p>
    </div>
  );
}