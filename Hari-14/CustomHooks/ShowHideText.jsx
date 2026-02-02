// Nomor 1
import useToggle from "./useToggle";

function ShowHideText() {
  const [show, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>
        {show ? "Hide" : "Show"} Text
      </button>
      {show && <p>Teks Ini Telah Muncul</p>}
    </div>
  );
}

export default ShowHideText;