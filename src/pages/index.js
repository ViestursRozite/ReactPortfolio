import React from "react";
import Fullstack from "../Components/Fullstack";
import InfoSection from "../Components/InfoSection";
import { homeObjOne } from "../Components/InfoSection/Data";

export const Home = () => {
  return (
    <>
      <h1>Heee Hee</h1>
      <Fullstack></Fullstack>
      <InfoSection {...homeObjOne}></InfoSection>
    </>
  );
};
