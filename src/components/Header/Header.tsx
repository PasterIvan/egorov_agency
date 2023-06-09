import React from "react";

import img_l from "../../img/img_l.svg";
import img_r from "../../img/img_r.svg";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img src={img_l} alt="" />
      <img src={img_r} alt="" />
    </div>
  );
};
