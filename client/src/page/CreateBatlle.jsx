import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton, CustomInput, PageHOC, GameLoad } from "../components";
import { useGlobalContext } from "../context";

import styles from "../styles";

const CreateBattle = () => {
  const navigate = useNavigate();
  const { contract, battleName, setBattleName, gameData } = useGlobalContext();
  const [waitBattle, setWaitBattle] = useState(false);

  const handleClick = async () => {
    if (!battleName || !battleName.trim()) return null;

    try {
      await contract.createBattle(battleName);
      setWaitBattle(true);
    } catch (e) {}
  };

  useEffect(() => {
    if (gameData?.activeBattle?.battleStatus === 0) {
      setWaitBattle(true);
    }
  }, [gameData]);

  return (
    <>
      {waitBattle && <GameLoad />}

      <div className="mb-5 flex flex-col">
        <CustomInput
          label="Battle"
          placeholder="Enter battle name"
          value={battleName}
          handleValueChange={setBattleName}
        />
        <CustomButton restStyles="mt-6" title="Create Battle" handleClick={handleClick} />
      </div>

      <p className={styles.infoText} onClick={() => navigate("/join-battle")}>
        Or join already existing battles
      </p>
    </>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your own battle and wait for other players to join you</>
);
