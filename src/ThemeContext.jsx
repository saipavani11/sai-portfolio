import React, { createContext, useContext, useEffect, useState } from 'react';

// 1. Create the context
const ThemeContext = createContext();

// 2. Custom hook for using theme
export const useTheme = () => useContext(ThemeContext);

// 3. Provider component
export const ThemeProvider = ({ children }) => {
  // Default: light theme
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme when changed
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
