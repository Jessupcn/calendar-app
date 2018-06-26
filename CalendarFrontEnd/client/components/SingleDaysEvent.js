import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { deleteEvent } from '../redux_store';
import AddUpdateEvent from './AddUpdateEvent';

class SingleDaysEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // bind functions
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const event = this.props.event;
    this.props.deleteEvent(event);
  }

  extractHours(timeString) {
    const time = new Date(timeString);
    const hours = time.getHours();
    let updatedTime = hours >= 12 ? `${hours % 12} pm` : `${hours} am`;
    if (updatedTime[0] === '0') {
      updatedTime = `12 ${updatedTime.slice(1)}`;
    }
    return updatedTime;
  }

  render() {
    const { day, event } = this.props;
    console.log('HOURS: ', this.extractHours(event.endTime));
    return (
      <div id="singleEvent">
        <div id="singleEventHeader">
          <h4 className="eventText">{event.name}</h4>
          <div>
            <AddUpdateEvent
              passedInEvent={event}
              day={day}
              trigger={<Icon name="edit" />}
            />
            <Icon name="delete" color="red" onClick={this.handleDelete} />
          </div>
        </div>
        <p id="timeContainer">
          {this.extractHours(event.startTime)} -{' '}
          {this.extractHours(event.endTime)}
        </p>
        <p id="singEventDesc">{event.description}</p>
      </div>
    );
  }
}

/**
 * Map dispatch to props
 */

const mapDispatch = dispatch => {
  return {
    deleteEvent(event) {
      dispatch(deleteEvent(event.id));
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    null,
    mapDispatch
  )(SingleDaysEvent)
);
