import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.documentElement.setAttribute("data-theme", saved ? "dark" : "light");
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute("data-theme", newMode ? "dark" : "light");
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        padding: "0.5rem",
        borderRadius: "9999px",
        cursor: "pointer",
        border: "1px solid var(--link-text)",
        backgroundColor: "var(--button-bg)",
        color: "var(--button-text)",
        transition: "background-color 0.3s, color 0.3s",
      }}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
