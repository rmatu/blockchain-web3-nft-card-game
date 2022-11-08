import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import styles from "../styles";

import { CustomButton, PageHOC } from "../components";

const JoinBattle = () => {
  const { contract, battleName, setBattleName } = useGlobalContext;

  const navigate = useNavigate();

  const handleClick = async () => {};

  return (
    <>
      <h2 className={styles.joinHeadText}>Available Battles:</h2>
      <p className={styles.infoText} onClick={() => navigate("/create-battle")}>
        Or create a new battle
      </p>
    </>
  );
};

export default PageHOC(
  JoinBattle,
  <>
    Join <br /> a Battle
  </>,
  <>Join already existing battles</>
);
