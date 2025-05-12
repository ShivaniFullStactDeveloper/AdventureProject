import React, { useState, useEffect } from "react";
import "../../styles/styleSwitcher.css";

/**
 * StyleSwitcher Component
 * Provides theme color selection and dark/light mode toggle functionality
 */
const StyleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Available theme colors
  const colors = [
    { name: "color-1", value: "#2196f3" },
    { name: "color-2", value: "#ec1839" },
    { name: "color-3", value: "#ff5722" },
    { name: "color-4", value: "#4caf50" },
    { name: "color-6", value: "#fa9dfe" }
  ];

  // Toggle the style switcher panel open/close
  const toggleStyleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  // Set the active theme color
  const setActiveStyle = (color) => {
    try {
      document.documentElement.style.setProperty('--theme-color', color);
      localStorage.setItem('theme-color', color);
    } catch (error) {
      console.error("Error setting theme color:", error);
    }
  };

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    try {
      const body = document.body;
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("mode", "light");
        setIsDarkMode(false);
      } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("mode", "dark");
        setIsDarkMode(true);
      }
    } catch (error) {
      console.error("Error toggling dark mode:", error);
    }
  };

  // Initialize theme from localStorage and set up event listeners
  useEffect(() => {
    try {
      // Apply stored theme color
      const storedColor = localStorage.getItem('theme-color');
      if (storedColor) {
        document.documentElement.style.setProperty('--theme-color', storedColor);
      }

      // Apply stored mode (dark/light)
      const storedMode = localStorage.getItem("mode");
      const body = document.body;
      if (storedMode === "light") {
        body.classList.remove("dark");
        body.classList.add("light");
        setIsDarkMode(false);
      } else {
        body.classList.remove("light");
        body.classList.add("dark");
        setIsDarkMode(true);
      }
    } catch (error) {
      console.error("Error initializing theme:", error);
    }

    // Close the style switcher when clicking outside
    const handleClickOutside = (event) => {
      const switcher = document.querySelector(".style-switcher");
      if (isOpen && switcher && !switcher.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="day-night s-icon" onClick={toggleDarkMode}>
        <i className={`fa fa-toggle-${isDarkMode ? 'on' : 'off'}`}></i>
      </div>

      <div className="style-switcher-toggler s-icon" onClick={toggleStyleSwitcher}>
        <i className="fas fa-palette"></i>
      </div>

      <h4>Theme Colors</h4>
      <div className="colors">
        {colors.map((color, index) => (
          <span
            key={index}
            className={`color-item ${color.name}`}
            onClick={() => setActiveStyle(color.value)}
            style={{ backgroundColor: color.value }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;