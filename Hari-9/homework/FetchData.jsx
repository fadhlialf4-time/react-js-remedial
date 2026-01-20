// Nomor 5
import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetch dimulai...");

    const timer = setTimeout(() => {
      setData({
        judul: "Simulasi Fetch Data dengan useEffect",
        deskripsi: "Data telah muncul",
      });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Sedang Loading.....</p>;

  return (
    <div>
      <h3>{data.judul}</h3>
      <p>{data.deskripsi}</p>
    </div>
  );
}

export default FetchData;
