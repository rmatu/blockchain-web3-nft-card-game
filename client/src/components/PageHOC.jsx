import React from "react";
import { useNavigate } from "react-router-dom";
import { logo, heroImg } from "../assets";
import styles from "../styles";

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();

  return (
    <div className={styles.hocContainer}>
      <div className={styles.hocContentBox}>
        <img src={logo} alt="logo" className={styles.hocLogo} onClick={() => navigate("/")} />

        <div className={styles.hocBodyWrapper}>
          <div className="flex w-full flex-row"></div>
          <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
          <p className={`${styles.normalText} my-10`}>{description}</p>
          <Component />
        </div>

        <p className={styles.footerText}>Made with love by 💜 RM</p>
      </div>
      <div className="flex flex-1">
        <img src={heroImg} alt="hero-img" className="w-full object-cover xl:h-full" />
      </div>
    </div>
  );
};

export default PageHOC;
