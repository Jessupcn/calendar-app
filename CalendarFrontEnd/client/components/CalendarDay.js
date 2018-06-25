import React from 'react';
import { CalendarEvent, AddUpdateEvent, SingleDay } from './index';
import { Icon } from 'semantic-ui-react';

export default function CalendarDay(props) {
  // Pull the current date and events array off the passed through event object.
  const { day, events } = props.eventObj;
  return (
    <div id="calendarDay">
      <div>
        <h3 className="dayNumber">{day <= 31 ? day : null}</h3>
      </div>
      <div>
        {events
          ? events.map(event => <CalendarEvent key={event.id} event={event} />)
          : null}
      </div>
      {// only display the Add Event button in boxes that have numbers in them.
      day <= 31 ? (
        <div id="singleDayButtons">
          <SingleDay day={day} events={events} />
          <AddUpdateEvent
            day={day}
            trigger={<Icon name="add" id="addEventButton" />}
          />
        </div>
      ) : null}
    </div>
  );
}
