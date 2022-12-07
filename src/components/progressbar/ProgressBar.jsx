import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./progressbar.scss";

const ProgressBar = ({ value }) => {
  const barInnerRef = useRef();

  useEffect(() => {
    barInnerRef.current.style.width = `${value}%`;
  }, [value]);
  return (
    <div className="progress-bar">
      <div ref={barInnerRef} className="progress-bar__inner"></div>
    </div>
  );
};

export default ProgressBar;
