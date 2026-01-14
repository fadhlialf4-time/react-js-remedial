// Nomor 1
import { useState } from "react";

function EventHandler() {
  const [pesan, setPesan] = useState("");

  return (
    <div>
      <button
        onClick={() => setPesan("Button ditekan")}
        onMouseEnter={() => setPesan("Kursor masuk area button")}
        onMouseLeave={() => setPesan("Kursor keluar area button")}
      >
        Tekan tombol ini
      </button>

      <p>{pesan}</p>
    </div>
  );
}

export default EventHandler;
