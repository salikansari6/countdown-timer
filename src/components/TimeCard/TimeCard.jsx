import React from "react";
import "./TimeCard.css";

const TimeCard = ({ text }) => {
  return (
    <div className="time-card">
      <div className="time-card__upper"></div>
      <div className="time-card__upper-dark-effect"></div>
      <div className="time-card__lower"></div>
      <div className="mid-line"></div>
      <div className="time-card__text">{text.toString().padStart(2, "0")}</div>
    </div>
  );
};

export default TimeCard;