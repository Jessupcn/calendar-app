import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CalendarDay } from './index';
import { fetchEvents } from '../redux_store';

/**
 * COMPONENT
 */
class Calendar extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  buildCalendar() {
    const calendarDays = new Array(35).fill().map((item, index) => {
      return {
        day: index + 1,
        events: []
      };
    });
    if (this.props.events) {
      this.props.events.forEach(event => {
        const dateToArray = event.startTime.split('T');
        const yearMonthDay = dateToArray[0].split('-');
        const extractedDay = yearMonthDay[2];
        calendarDays[extractedDay - 1].events.push(event);
      });
    }
    return calendarDays.map(daysEvents => {
      return <CalendarDay key={daysEvents.day} eventObj={daysEvents} />;
    });
  }

  render() {
    console.log(this.props);
    return (
      <div id="calendarContainer">
        <div id="titleContainer">
          <h1>July</h1>
        </div>
        <div id="dayContainer">{this.buildCalendar()}</div>
      </div>
    );
  }
}

/**
 * Map state and dispatch to props
 */
const mapState = state => {
  return {
    events: state.events
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchEvents());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Calendar)
);
