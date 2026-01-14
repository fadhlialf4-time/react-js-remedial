import StatusLogin from "./homework/StatusLogin"
import Dashboard from "./homework/Dashboard"
import PesanStatus from "./homework/PesanStatus"
import DaftarProduk from "./homework/DaftarProduk"
import ListProduk from "./homework/ListProduk"

function App() {
  return (
  <>
    <StatusLogin />
    <Dashboard />
    <PesanStatus status="success" />
    <DaftarProduk />
    <ListProduk />
  </>
  )
}

export default App