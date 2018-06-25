import React from 'react';
import { Header, Icon, Modal } from 'semantic-ui-react';
import { SingleDaysEvent } from './index';

function SingleDay(props) {
  const day = props.day;
  const events = props.events;
  return (
    <Modal
      id="singleDayModal"
      trigger={<Icon name="clipboard outline" id="singleDayView" />}
    >
      <Header icon="clipboard outline" content={`Events for July ${day}`} />
      <Modal.Content>
        {events.length
          ? events.map(event => {
              return <SingleDaysEvent key={event.id} event={event} day={day} />;
            })
          : `There are no events on July ${day}`}
      </Modal.Content>
    </Modal>
  );
}

export default SingleDay;
