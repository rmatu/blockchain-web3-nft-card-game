import React from "react";
import { PageHOC } from "../components";

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-xl text-white">xd</h1>
    </div>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your own battle and wait for other players to join you</>
);
