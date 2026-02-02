// Nomor 3
import useCounter from "./useCounter";
import useToggle from "../CustomHooks/useToggle";

function useCounterWithToggle() {
  const counter = useCounter();
  const [show, toggle] = useToggle(true);

  return { ...counter, show, toggle };
}

export default useCounterWithToggle;
