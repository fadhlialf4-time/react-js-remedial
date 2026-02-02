// Nomor 2
import { useNavigate } from "react-router-dom"

function Dashboard({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
