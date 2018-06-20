import React, {Component} from 'react'

import { CalendarDay } from './index'

/**
 * COMPONENT
 */
class Calendar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      calendar: 0
    }
  }

  // componentDidMount () {
  //   this.props.loadInitialData()
  // }

  buildCalendar () {
    let calendarDays = new Array(28).fill().map((item, index) => index + 1)
    calendarDays.map((day) => {
      return <CalendarDay day={day} />
    })
  }

  render() {
    return (
      <div>
        <h1>Month</h1>
        <div>
          { this.buildCalendar() }
        </div>
      </div>
    )
  }
}

export default Calendar;
