"use client";
import { useState } from "react";
import "./style.css";

export default function ThemeAnimation() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTheme = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    setIsAnimating(true);
    setDarkTheme(!darkTheme);

    // Reset animating state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Match animation duration
  };

  return (
    <div className="outer_container">
      <h3>Experience the theme switch animation yourself.</h3>
      <p>
        This technique is using clip-path, this element is duplicated and
        overlayed on top of the original one. The duplicated elements have
        different themes and we just reveal the one underneath by animating the
        clip-path property.
      </p>
      <button className="parent_button" onClick={handleTheme}>
        Switch theme
      </button>

      <div
        className={`inner_container ${
          darkTheme ? "visible" : isAnimating ? "hiding" : ""
        }`}
      >
        <h3>Experience the theme switch animation yourself.</h3>
        <p>
          This technique is using clip-path, this element is duplicated and
          overlayed on top of the original one. The duplicated elements have
          different themes and we just reveal the one underneath by animating
          the clip-path property.
        </p>
        <button className="child_button" onClick={handleTheme}>
          Switch theme
        </button>
      </div>
    </div>
  );
}
