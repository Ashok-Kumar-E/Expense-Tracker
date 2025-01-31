import React, { useState } from "react";
import Toggle from "react-toggle";
import "../assets/styles.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Toggle
      checked={darkMode}
      icons={{ checked: "🌙", unchecked: "☀️" }}
      onChange={() => setDarkMode(!darkMode)}
    />
  );
};

export default ThemeToggle;
