import React from "react";

import "./App.css";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 50,
      }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
