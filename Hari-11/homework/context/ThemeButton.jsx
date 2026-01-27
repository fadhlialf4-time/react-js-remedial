// Nomor 5
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Ganti Tema</button>;
}

export default ThemeButton;