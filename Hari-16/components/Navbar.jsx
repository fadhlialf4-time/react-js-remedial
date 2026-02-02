import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    color: "tomato",
  };

  return (
    <nav style={{ display: "flex", gap: "15px" }}>
      <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : null}>
        Home
      </NavLink>

      <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : null}>
        About
      </NavLink>

      <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : null}>
        Contact
      </NavLink>

      <NavLink to="/dashboard/profile">Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;
