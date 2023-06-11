import React from "react";

import "./App.css";
import styles from "./App.module.css";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";

const App: React.FC = () => {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <Body />
        <Footer />
      </div>
      <Slider />
    </>
  );
};

export default App;
