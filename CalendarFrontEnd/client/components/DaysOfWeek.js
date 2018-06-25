import React from 'react';

export default function DaysOfWeek() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return (
    <div id="daysOfWeekContainer">
      {days.map(day => {
        return (
          <div key={day} id="daysOfWeek">
            <h5>{day}</h5>
          </div>
        );
      })}
    </div>
  );
}
