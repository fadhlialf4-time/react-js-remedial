<<<<<<< HEAD
import ProfileCard from './components/ProfileCard'
import Profile from './components/Profile'
import Button from './components/Button'
import AlertBox from './components/AlertBox'
import ResponsiveBox from './components/ResponsiveBox'
=======
// import StokBarang from "./view/StokBarang"
import Card from "./components/Card"
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import Comment from "./components/Comment"
>>>>>>> 2ee6cef9bf28ebe98a7db42ec6bd6e75398b16cc

function App() {
  return (
    <>
<<<<<<< HEAD
      <ProfileCard />
      <Profile />
      <Button />

      <AlertBox type="success" message="Data berhasil disimpan" />
      <AlertBox type="warning" message="Periksa kembali input kamu" />
      <AlertBox type="error" message="Terjadi kesalahan" />
      
      <ResponsiveBox />
=======
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
>>>>>>> 2ee6cef9bf28ebe98a7db42ec6bd6e75398b16cc
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 2ee6cef9bf28ebe98a7db42ec6bd6e75398b16cc
