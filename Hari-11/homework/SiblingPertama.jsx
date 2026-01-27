// Nomor 3
function SiblingPertama({ setName }) {
  return (
    <input
      placeholder="Masukkan nama"
      onChange={(e) => setName(e.target.value)}
    />
  );
}

export default SiblingPertama;
