// import StokBarang from "./view/StokBarang"
import Card from "./components/Card"
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import Comment from "./components/Comment"

function App() {
  return (
    <>
    {/* <StokBarang 
      judul="Minyak" stok={10} 
      judul2="Gula" stok2={5}
    /> */}
      
     <Greeting 
      name= "Fadhli" />

    <ProductCard 
      productName= "Gamis Jetblack" price={170000} stock={3} isAvailable />

    <Card>
      <h2 className="font-bold text-xl mb-2">Halo 👋</h2>
      <p className="text-gray-600">
        Ini contoh children berupa teks
      </p>
    </Card>

    <Card>
      <img
        className="rounded mb-2"
        src="https://via.placeholder.com/150"
        alt="contoh"
      />
      <p className="text-sm text-red-700">
        Ini card dengan gambar
      </p>
    </Card>

    <Card>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Klik Saya
      </button>
    </Card>
    
    <Comment />
    </>
  )
}

export default App