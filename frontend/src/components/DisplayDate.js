import React from "react";

const DateDisplay = (props) => {
  const { dateString } = props;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return (
    <div>
      <h5>
        {formattedDate} at {formattedTime}
      </h5>
    </div>
  );
};

export default DateDisplay;
