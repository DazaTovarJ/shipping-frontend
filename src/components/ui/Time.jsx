import React from "react";
import "./Time.scss";

const Time = ({ duration, unit }) => {
  return (
    <div className="time-circle">
      <span className="duration">{duration}</span>
      <br />
      <span className="unit">{unit}</span>
    </div>
  );
};

export default Time;
