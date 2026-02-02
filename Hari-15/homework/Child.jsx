// Nomor 1
import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child di-render");
  return <h3>Halo {name}</h3>;
})

export default Child;