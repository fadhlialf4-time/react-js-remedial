import { BrowserRouter } from "react-router-dom";
import Parent from "./homework/Parent";
import HeavyCalc from "./homework/HeavyCalc";
import Button from "./homework/Button";
import LazyApp from "./homework/LazyLoading/LazyApp";

function App() {
  return (
    <BrowserRouter>
      <Parent />

      <hr />
      <HeavyCalc />

      <hr />
      <Button />

      <hr />
      <LazyApp />
    </BrowserRouter>
  );
}

export default App;
