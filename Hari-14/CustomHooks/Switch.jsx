// Nomor 1
import useToggle from "./useToggle";

function Switch() {
  const [on, toggle] = useToggle();

  return (
    <button onClick={toggle}>
      Switch : {on ? "ON" : "OFF"}
    </button>
  );
}

export default Switch;