// Nomor 3
function PesanStatus({ status }) {
  let content;

  switch (status) {
    case "loading":
      content = <p>Loading.....</p>;
      break;
    case "success":
      content = <p>Data berhasil muncul</p>;
      break;
    case "error":
      content = <p>Terjadi error</p>;
      break;
    default:
      content = <p>Status tidak dikenal</p>;
  }

  return <div>{content}</div>;
}

export default PesanStatus