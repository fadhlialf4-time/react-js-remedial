// Nomor 4
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Halaman yang kamu cari tidak ada.</p>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}

export default NotFound;