"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default function Theme({ children }) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check local storage only after mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {/* We use flex-grow on a wrapper to keep the footer at the bottom */}
      <div className="relative min-h-screen flex flex-col">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);