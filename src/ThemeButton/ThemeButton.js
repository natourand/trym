import React, { useState } from "react";
import "./ThemeButton.css";

function ThemeButton() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    // Toggle the state of isChecked
    setIsChecked(!isChecked);

    // Apply the theme based on isChecked value
    if (!isChecked) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  return (
    <div className="themeButton">
      <label className="theme-switch">
        <input type="checkbox" className="checkbox" checked={isChecked} onChange={toggleTheme} />
        <div className="container">
          <div className="circle-container">
            <div className="sun-moon-container">
              <div className="moon">
                <div className="spot"></div>
                <div className="spot"></div>
                <div className="spot"></div>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default ThemeButton;
