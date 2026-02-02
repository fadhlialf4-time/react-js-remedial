import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav style={{ display: "flex", gap: "10px" }}>
        <NavLink to="profile">Profil</NavLink>
        <NavLink to="settings">Pengaturan</NavLink>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;
