import React, { useEffect, useState } from "react";

import date from "../../img/date.svg";

import styles from "./Counter.module.css";

export const Counter: React.FC = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const deadline: number = +new Date(2023, 6, 24);
  let timerId: any;

  const countdownTimer: () => void = () => {
    const newDate: number = +new Date();
    const diff: number = deadline - newDate;

    if (diff <= 0) {
      clearInterval(timerId);
    }
    setDays((diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0).toString());
    setHours(
      (diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0).toString(),
    );
    setMinutes((diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0).toString());
    setSeconds((diff > 0 ? Math.floor(diff / 1000) % 60 : 0).toString());
  };

  useEffect(() => {
    countdownTimer();
  }, [seconds]);

  timerId = setInterval(countdownTimer, 1000);

  return (
    <div className={styles.container}>
      <div className={styles.countContainer}>
        <div className={styles.count}>{+days < 10 ? `0${days}` : days}</div>
        <img src={date} alt="" />
        <div className={styles.countTitle}>Days</div>
      </div>
      <div className={styles.count}>:</div>
      <div className={styles.countContainer}>
        <div className={styles.count}>{+hours < 10 ? `0${hours}` : hours}</div>
        <img src={date} alt="" />
        <div className={styles.countTitle}>Hours</div>
      </div>
      <div className={styles.count}>:</div>
      <div className={styles.countContainer}>
        <div className={styles.count}>
          {+minutes < 10 ? `0${minutes}` : minutes}
        </div>
        <img src={date} alt="" />
        <div className={styles.countTitle}>Minutes</div>
      </div>
      <div className={styles.count}>:</div>
      <div className={styles.countContainer}>
        <div className={styles.count}>
          {+seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <img src={date} alt="" />
        <div className={styles.countTitle}>Seconds</div>
      </div>
    </div>
  );
};
