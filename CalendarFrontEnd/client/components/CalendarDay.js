import React from 'react';
import { CalendarEvent } from './index';

export default function CalendarDay (props) {
  // Pull the current date and events array off the passed
  // through event object.
  const {day, events} = props.eventObj;
  if (events.length) console.log(events);
  return (
    <div id="calendarDay">
      <div>
        <h3 className="dayNumber">{ day }</h3>
      </div>
      <div>
        {
          events
          ? events.map(event => <CalendarEvent key={event} event={event} />)
          : null
        }
      </div>
    </div>
  );
}
