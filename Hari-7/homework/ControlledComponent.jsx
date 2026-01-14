// Nomor 3
import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nama kamu: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama"
      />

      <p>Nama sekarang: {name}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledComponent;
