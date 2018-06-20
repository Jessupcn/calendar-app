import React from 'react';
import CalendarEvent from './index';

export default function CalendarDay (props) {
  const day = props.day;
  const events = props.events;

  return (
    <div>
      <div className="media-left">
        <h3>{ day }</h3>
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