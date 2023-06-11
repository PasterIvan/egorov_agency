import React from "react";

import client_care_plans from "./img/client_care_plans.png";
import hawaiian_party from "./img/hawaiian_party.jpeg";
import home_security from "./img/home_security.jpeg";
import mafia_party from "./img/mafia_party.jpeg";
import network_design_implementation from "./img/network_design_implementation.jpeg";
import party from "./img/party.jpg";
import party_on_the_beach from "./img/party_on_the_beach.jpeg";
import system_design_engineering from "./img/system_design_engineering.jpeg";
import styles from "./Slider.module.css";

const Fade = require("react-reveal/Fade");

type SliderItem = {
  id: string;
  title: string;
  date: string;
  link: string;
  img: string;
};

const sliderItems: SliderItem[] = [
  {
    id: "01",
    title: "Hawaiian party",
    date: "13.02.2023",
    link: "",
    img: hawaiian_party,
  },
  {
    id: "02",
    title: "Мafia party",
    date: "13.02.2023",
    link: "",
    img: mafia_party,
  },
  {
    id: "03",
    title: "Party",
    date: "13.02.2023",
    link: "",
    img: party,
  },
  {
    id: "04",
    title: "Party on the beach",
    date: "13.02.2023",
    link: "",
    img: party_on_the_beach,
  },
  {
    id: "05",
    title: "Home Security",
    date: "13.02.2023",
    link: "",
    img: home_security,
  },
  {
    id: "06",
    title: "Network Design & Implementation",
    date: "13.02.2023",
    link: "",
    img: network_design_implementation,
  },
  {
    id: "07",
    title: "System Design & Engineering",
    date: "13.02.2023",
    link: "",
    img: system_design_engineering,
  },
  {
    id: "08",
    title: "Client Care Plans",
    date: "13.02.2023",
    link: "",
    img: client_care_plans,
  },
];

export const Slider: React.FC = () => {
  return (
    <div id="slider" className={styles.container}>
      <Fade top>
        <div className={styles.title}>All events</div>
      </Fade>
      <div className={styles.list}>
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className={styles.listItem}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <input
              type="radio"
              name="mem"
              id={item.id}
              value={item.id}
              className={styles.input}
            />
            <label htmlFor={item.id} className={styles.button}>
              <div className={styles.imgMem}>
                <div className={styles.descriptionItem}>
                  <div className={styles.descriptionTitle}>{item.title}</div>
                  <div className={styles.descriptionDate}>{item.date}</div>
                  <a className={styles.descriptionLink} href="/">
                    More information
                  </a>
                </div>
              </div>
              <div className={styles.headItem}>
                <h2 className={styles.listItemTitle}>
                  {`${item.id}   ${item.title}`}
                </h2>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
