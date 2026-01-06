// Nomor 3
// Menggunakan Logical AND

function MessageInfo({ messageCount }) {
  return (
    <div>
      <p>Kotak Masuk</p>
      {messageCount > 0 && (
        <p>Kamu punya {messageCount} pesan baru 📩</p>
      )}
    </div>
  );
}

export default MessageInfo