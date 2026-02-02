// Nomor 2
import { useState, useMemo } from "react";

function expensiveCalculation(num) {
  console.log("Menghitung berat...");
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num;
  }
  return result;
}

function HeavyCalc() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <>
      <h3>Hasil: {calculatedValue}</h3>

      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Ubah Number
      </button>
    </>
  );
}

export default HeavyCalc