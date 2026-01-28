import { useUserContext } from "./useUserContext";

function Profile() {
  const { user, updateProfile } = useUserContext();

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={() => updateProfile({ name: "Updated Name" })}>
        Update Name
      </button>
    </div>
  );
}

export default Profile