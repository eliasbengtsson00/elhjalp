"use client";
import { createContext, useContext } from "react";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";

const ThemeContext = createContext();

export default function Theme({ children }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false}
    >
      <ThemeWrapper>{children}</ThemeWrapper>
    </NextThemesProvider>
  );
}

function ThemeWrapper({ children }) {
  const { resolvedTheme, setTheme } = useNextTheme();

  const isLightMode = resolvedTheme === "light";
  const toggleTheme = () => setTheme(isLightMode ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      <div className="relative min-h-screen flex flex-col">{children}</div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);