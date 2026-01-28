// Nomor 1
import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserInfo() {
  const { user, login, logout } = useContext(UserContext);

  if (!user.isLoggedIn) {
    return <button onClick={() => login("Fadhli", "fadhli@email.com")}>Login</button>;
  }

  return (
    <div>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserInfo;