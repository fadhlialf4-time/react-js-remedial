// Nomor 2
import { useState } from "react";

function SyntheticEvent() {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Website ini telah diblokir oleh KomDigi");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <a href="https://grok.com" onClick={handleClick}>
        Klik link ini
      </a>

      <br /><br />

      <input
        type="text"
        placeholder="Ketik sesuatu..."
        onChange={handleChange}
      />

      <p>Isi input: {text}</p>
    </div>
  );
}

export default SyntheticEvent;
