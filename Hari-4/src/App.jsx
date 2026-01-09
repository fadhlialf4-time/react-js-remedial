import ProfileCard from './components/ProfileCard'
import Profile from './components/Profile'
import Button from './components/Button'
import AlertBox from './components/AlertBox'
import ResponsiveBox from './components/ResponsiveBox'

function App() {
  return (
    <>
      <ProfileCard />
      <Profile />
      <Button />

      <AlertBox type="success" message="Data berhasil disimpan" />
      <AlertBox type="warning" message="Periksa kembali input kamu" />
      <AlertBox type="error" message="Terjadi kesalahan" />
      
      <ResponsiveBox />
    </>
  )
}
export default App
