// Nomor 3
import React from "react";

const ChildButton = React.memo(({ onClick }) => {
  console.log("ChildButton Berhasil di-render");
  return <button onClick={onClick}>Klik Ini</button>;
})

export default ChildButton;
