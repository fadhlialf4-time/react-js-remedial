// Nomor 1
function ProfileBox() {
  const boxStyle = {
    backgroundColor: "#f1f5f9",
    padding: "16px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    width: "250px",
  };

  const nameStyle = {
    color: "#0f172a",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const roleStyle = {
    color: "#475569",
    fontSize: "14px",
  };

  return (
    <div style={boxStyle}>
      <p style={nameStyle}>Fadhli</p>
      <p style={roleStyle}>Kelas React JavaScript</p>
    </div>
  );
}

export default ProfileBox;
