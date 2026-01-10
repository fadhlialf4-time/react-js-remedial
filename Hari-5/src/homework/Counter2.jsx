// Nomor 5
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleTambah() {
    setCount(prevCount => prevCount + 1);
  }

  function handleKurang() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleKurang}>Kurang</button>
    </div>
  );
}

export default Counter;
