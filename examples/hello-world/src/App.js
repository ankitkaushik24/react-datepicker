import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "./custom.css";
import "react-datepicker/dist/react-datepicker.css";
import "./tooltip.css";

const holidays = {
  "2023-08-22": "Holiday 1",
  "2023-08-23": "Holiday 2",
  "2023-08-24": "Holiday 3",
  "2023-08-25": "Holiday 4",
  "2023-08-26": "Holiday 5",
};

const renderDayContents = (day, date) => {
  const dateStr = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).substr(
    -2,
  )}-${("0" + date.getDate()).substr(-2)}`;
  const holiday = holidays[dateStr];
  return (
    <div data-tooltip={holiday} style={{ "--color": "#222" }}>
      {day}
    </div>
  );
};

class App extends Component {
  state = {
    startDate: new Date(),
    highlightDates: [
      {
        "react-datepicker-day__holiday": Object.keys(holidays).map(
          (d) => new Date(d),
        ),
      },
    ],
  };

  render() {
    const { startDate, highlightDates } = this.state;
    return (
      <DatePicker
        selected={startDate}
        highlightDates={highlightDates}
        onChange={this.handleChange}
        renderDayContents={renderDayContents}
      />
    );
  }

  handleChange = (startDate) => {
    this.setState({
      startDate,
    });
  };
}

export default App;
