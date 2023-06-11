import React from "react";

import img_l from "../../img/img_l.png";
import img_r from "../../img/img_r.png";
import logo from "../../img/logo.svg";

import styles from "./Header.module.css";

const Fade = require("react-reveal/Fade");

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Fade top left duration={1000} delay={800}>
        <div className={styles.imgL}>
          <img src={img_l} alt="" />
        </div>
      </Fade>
      <Fade top>
        <a href="/">
          <img src={logo} alt="" className={styles.logo} />
        </a>
      </Fade>
      <Fade top right cascade duration={1500} delay={800}>
        <div className={styles.imgR}>
          <img src={img_r} alt="" />
        </div>
      </Fade>
    </div>
  );
};
