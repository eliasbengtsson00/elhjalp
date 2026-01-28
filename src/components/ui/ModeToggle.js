"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/providers/Theme";
import { LightBulbOn, LightBulbOff } from "iconoir-react";

export default function ModeToggle() {
  const { isLightMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Important: Only show the toggle once the client has mounted
  // This prevents the toggle from disappearing or flickering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-24 h-10" />; // Placeholder to keep layout stable

  return (
    <div className="flex items-center space-x-4 px-5 py-2.5 rounded-full border border-border-subtle bg-background transition-colors duration-500 shadow-sm">
      <div className="flex items-center justify-center">
        {isLightMode ? (
          <LightBulbOff className="w-6 h-5 text-zinc-400" />
        ) : (
          <LightBulbOn className="w-6 h-5 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
        )}
      </div>

      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`w-10 h-6 p-1 rounded-full flex items-center transition-all duration-300 border border-border-subtle cursor-pointer ${
          isLightMode ? "bg-zinc-200 justify-end" : "bg-zinc-800 justify-start"
        }`}
      >
        <div className="w-3.5 h-3.5 rounded-full shadow-md transition-all duration-300 bg-foreground"></div>
      </button>
    </div>
  );
}