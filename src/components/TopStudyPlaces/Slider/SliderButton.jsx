import React from "react";
import "./index.css";
import Next from "./svgs/Next";
import Prev from "./svgs/Prev";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <Next /> : <Prev />}
    </button>
  );
}