// Nomor 1
import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function TemperatureCalculator() {
  const [celsius, setCelsius] = useState("");

  const handleCelsiusChange = (value) => {
    setCelsius(value);
  };

  const handleFahrenheitChange = (value) => {
    setCelsius(((value - 32) * 5) / 9);
  };

  const fahrenheit =
    celsius === "" ? "" : (celsius * 9) / 5 + 32;

  return (
    <>
      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </>
  );
}

export default TemperatureCalculator;