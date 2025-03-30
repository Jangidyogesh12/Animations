"use client";
import { useState } from "react";
import "./style.css";

export default function Test() {
  const [animate, setAnimate] = useState<boolean>(false);

  const handleClick = () => {
    setAnimate((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <div className="outer" onClick={handleClick}>
        <div className={`inner ${animate ? "animate" : "rev_animate"}`}></div>
      </div>
    </>
  );
}
