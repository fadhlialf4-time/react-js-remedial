// Nomor 5
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function ThemedText() {
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{ color: theme === "light" ? "#000" : "#fff" }}>
      Tema sekarang: {theme}
    </p>
  );
}

export default ThemedText;
