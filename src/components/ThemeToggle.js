import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <svg
      onClick={toggleTheme}
      class="bi bi-moon"
      width="2em"
      height="2em"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.002 8.002 0 1010.586 10.586z" />
    </svg>
  );
};

export default ThemeToggle;
