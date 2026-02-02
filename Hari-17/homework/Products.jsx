// Nomor 3
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <h2>Products Page</h2>
      <p>Filter kategori: {category || "Semua"}</p>

      <button onClick={() => setSearchParams({ category: "baju" })}>
        Baju
      </button>

      <button onClick={() => setSearchParams({ category: "sepatu" })}>
        Sepatu
      </button>

      <button onClick={() => setSearchParams({})}>
        Reset
      </button>
    </div>
  );
}

export default Products;
