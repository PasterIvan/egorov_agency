import React from "react";

import img_l from "../../img/img_l.png";
import img_r from "../../img/img_r.png";
import logo from "../../img/logo.svg";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.imgL}>
        <img src={img_l} alt="" />
      </div>
      <a href="/">
        <img src={logo} alt="" className={styles.logo} />
      </a>
      <div className={styles.imgR}>
        <img src={img_r} alt="" />
      </div>
    </div>
  );
};
