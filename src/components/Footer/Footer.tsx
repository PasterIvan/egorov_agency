import React, { useState } from "react";

import arrow_d from "../../img/arrow_d.svg";
import arrow_r from "../../img/arrow_r.svg";
import cross from "../../img/cross.svg";

import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const dataFetch = async () => {
    const data: { error: null | string; exists: boolean | null } = await (
      await fetch(
        `https://perfect-inc.com/tools/email-checker/api/?email=${email}`,
      )
    )
      .json()
      .catch(() => {
        setError(true);
        setOpen(true);
      });

    if (data.exists) {
      setOpen(true);
    } else {
      setError(true);
      setOpen(true);
    }
  };

  const closePopup: () => void = () => {
    setOpen(false);
    setError(false);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div style={{ width: 160 }} />
        <form
          style={{ position: "relative" }}
          onSubmit={(event) => {
            event.preventDefault();
            if (email) dataFetch();
          }}
        >
          <input
            type="email"
            name="email"
            className={styles.inputForm}
            placeholder="Enter your Email and get notified"
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <button type="submit" className={styles.submit}>
            <img src={arrow_r} alt="" />
          </button>
        </form>
        <button type="button" className={styles.otherButton}>
          <div>Other Events</div>
          <img src={arrow_d} alt="" />
        </button>
        <div
          style={{ display: open ? "block" : "none" }}
          className={styles.popupContainer}
        >
          <div className={styles.popup}>
            <button type="button" className={styles.cross} onClick={closePopup}>
              <img src={cross} alt="" />
            </button>
            <h3
              className={styles.title}
              style={{ color: error ? "#DF2224" : "" }}
            >
              {error ? "ERROR" : "SUCCESS!"}
            </h3>
            <span className={styles.message}>
              {error
                ? "Email newsletter subscription failed!"
                : " You have successfully subscribed to the email newsletter!"}
            </span>
            <button
              className={styles.close}
              style={{ background: error ? "#DF2224" : "" }}
              type="button"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
