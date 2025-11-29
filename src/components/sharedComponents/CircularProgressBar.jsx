import React from "react";
import { useAppContext } from "@site/src/customHooks/useAppContext.js";
import "@site/src/assets/scss/components/_circular-progress-bar.scss";

const CircularProgressBar = () => {
  const { appImages } = useAppContext();

  const handleMouseUp = e => {
    e.stopPropagation();
  };

  return (
    <div className="loading-animation initial-loader translucent-background" onMouseUp={handleMouseUp}>
      <img src={appImages['loader.gif']} alt="Loading..." />
    </div>
  );
};

export default CircularProgressBar;
