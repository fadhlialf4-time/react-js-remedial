// Nommor 2
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#ddd" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Toggle Theme
    </button>
  );
}

export function ThemeCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      padding: 16,
      background: theme === "light" ? "#f9f9f9" : "#222",
      color: theme === "light" ? "#000" : "#fff",
    }}>
      Card Component
    </div>
  );
}

export function ThemeText() {
  const { theme } = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
