// Nomor 3
import useCounterWithToggle from "./useCounterWithToggle";

function Counter() {
  const { count, increment, decrement, show, toggle } =
    useCounterWithToggle();

  return (
    <div>
      <button onClick={toggle}>
        {show ? "Hide" : "Show"} Counter
      </button>

      {show && (
        <>
          <h2>{count}</h2>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </>
      )}
    </div>
  );
}

export default Counter;
