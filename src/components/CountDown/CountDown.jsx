import React, { useEffect, useState } from "react";
import TimeCard from "../TimeCard/TimeCard";
import "./CountDown.css";

const END_TIME = new Date("January 10, 2022 03:24:00").getTime();
const CURRENT_TIME = Date.now();
const DIFFERENCE = END_TIME - CURRENT_TIME;

const CountDown = () => {
  const [remainingTime, setRemainingTime] = useState(DIFFERENCE);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(END_TIME - Date.now());
    }, 1000);
  }, []);

  const dayText = Math.floor(remainingTime / day);
  const hourText = Math.floor((remainingTime % day) / hour);
  const minuteText = Math.floor((remainingTime % hour) / minute);
  const secondText = Math.floor((remainingTime % minute) / second);

  return (
    <div className="countdown__container">
      <TimeCard text={dayText} />
      <TimeCard text={hourText} />
      <TimeCard text={minuteText} />
      <TimeCard text={secondText} />
    </div>
  );
};

export default CountDown;
