// Nomor 3
import { useState } from "react";
import SiblingPertama from "./SiblingPertama";
import SiblingKedua from "./SiblingKedua";

function Parents() {
  const [name, setName] = useState("");

  return (
    <>
      <SiblingPertama setName={setName} />
      <SiblingKedua name={name} />
    </>
  );
}

export default Parents;
