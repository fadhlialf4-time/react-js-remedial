// Nomor 5
import useLocalStorage from "./useLocalStorage";

function Theme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <p>Theme: {theme}</p>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme;
