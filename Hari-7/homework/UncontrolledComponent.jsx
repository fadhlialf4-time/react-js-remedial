// Nomor 4
import { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nilai input: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Ketik bebas" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledComponent;
