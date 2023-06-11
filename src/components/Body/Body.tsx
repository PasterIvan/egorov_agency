import React from "react";

import arrow_r from "../../img/arrow_r.svg";
import { Counter } from "../Counter/Counter";

import styles from "./Body.module.css";

const Fade = require("react-reveal/Fade");

export const Body: React.FC = () => {
  return (
    <div className={styles.body}>
      <Fade top duration={1000} delay={200}>
        <h1 className={styles.title}>Under Construction</h1>
        <span className={styles.subTitle}>
          We&apos;re making lots of improvements and will be back soon
        </span>
      </Fade>
      <Fade top duration={1500} delay={400}>
        <Counter />
      </Fade>
      <Fade top duration={1800} delay={600}>
        <span className={styles.buttonTitle}>
          Check our event page when you wait:
        </span>
        <a href="https://www.google.com/">
          <button type="button" className={styles.goButton}>
            <div>Go to the event</div>
            <img src={arrow_r} alt="" />
          </button>
        </a>
      </Fade>
    </div>
  );
};
