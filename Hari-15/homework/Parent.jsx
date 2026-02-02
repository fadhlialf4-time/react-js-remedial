// Nomor 1
import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  console.log("Parent render");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child name="Fadhli" />
    </>
  );
}

export default Parent