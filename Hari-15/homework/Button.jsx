// Nomor 3
import { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

function Button() {
  const [count, setCount] = useState(0);
  const [setText] = useState("");

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <ChildButton onClick={increment} />

      <p>Count: {count}</p>

      <input
        placeholder="tanpa useCallback = button rerender"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default Button;