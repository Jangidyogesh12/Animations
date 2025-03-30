"use client";
import { useState } from "react";
import "./style.css";
export default function TelegramTheme() {
  const [animate, setAnimate] = useState<boolean | null>(null);
  const handleOnClick = () => {
    setAnimate((prev) => (prev === null ? true : !prev));
  };

  return (
    <div className="container">
      <div className="trigger" onClick={handleOnClick}></div>
      <h3>Experience the theme switch animation yourself.</h3>
      <p>
        This technique is using clip-path, this element is duplicated and
        overlayed on top of the original one. The duplicated elements have
        different themes and we just reveal the one underneath by animating the
        clip-path property.
      </p>
      <div
        className={`box ${
          animate === null ? "" : animate ? "animate" : "rev_animate"
        }`}
      >
        <div className="trigger" onClick={handleOnClick}></div>
        <h3>Experience the theme switch animation yourself.</h3>
        <p>
          This technique is using clip-path, this element is duplicated and
          overlayed on top of the original one. The duplicated elements have
          different themes and we just reveal the one underneath by animating
          the clip-path property.
        </p>
      </div>
    </div>
  );
}
