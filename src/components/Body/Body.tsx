import React from "react";

import arrow_r from "../../img/arrow_r.svg";
import logo from "../../img/logo.svg";
import { Counter } from "../Counter/Counter";

import styles from "./Body.module.css";

export const Body: React.FC = () => {
  return (
    <div className={styles.body}>
      <a href="/" className={styles.link}>
        <img src={logo} alt="" className={styles.logo} />
      </a>
      <h1 className={styles.title}>Under Construction</h1>
      <span className={styles.subTitle}>
        We&apos;re making lots of improvements and will be back soon
      </span>
      <Counter />
      <span className={styles.buttonTitle}>
        Check our event page when you wait:
      </span>
      <a href="https://www.google.com/">
        <button type="button" className={styles.goButton}>
          <div>Go to the event</div>
          <img src={arrow_r} alt="" />
        </button>
      </a>
    </div>
  );
};
