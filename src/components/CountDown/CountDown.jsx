import React, { useEffect, useState } from "react";
import TimeCard from "../TimeCard/TimeCard";
import "./CountDown.css";

const END_TIME = new Date("October 1, 2023 00:00").getTime();
const CURRENT_TIME = Date.now();
const DIFFERENCE = END_TIME - CURRENT_TIME;

const CountDown = () => {
  const [remainingTime, setRemainingTime] = useState(DIFFERENCE);

  //Defining time units in milliseconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const updateCountDown = () => {
    setRemainingTime(END_TIME - Date.now());
  };

  useEffect(() => {
    //Updates the countdown every second
    let interval = setInterval(updateCountDown, 1000);

    //clearing interval whenever component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  //Converting milliseconds value of remaining time to appropriate time units to display on UI
  const dayText = Math.floor(remainingTime / day);
  const hourText = Math.floor((remainingTime % day) / hour);
  const minuteText = Math.floor((remainingTime % hour) / minute);
  const secondText = Math.floor((remainingTime % minute) / second);

  return (
    <div className="countdown">
      <h1 className="heading">WE'RE LAUNCHING SOON</h1>
      <div className="countdown__container">
        {remainingTime > 0 ? (
          <>
            <TimeCard title="days" text={dayText} />
            <TimeCard title="hours" text={hourText} />
            <TimeCard title="minutes" text={minuteText} />
            <TimeCard title="seconds" text={secondText} />
          </>
        ) : (
          <p className="countdown__finished">COUNTDOWN FINISHED</p>
        )}
      </div>
    </div>
  );
};

export default CountDown;
