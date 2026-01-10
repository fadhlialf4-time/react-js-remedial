// Nomor 2
import { useState } from 'react';

function UserProfile() {
  const [nama, setNama] = useState("");
  const [usia, setUsia] = useState("");
  const [modeEdit, setModeEdit] = useState("");

  return (
    <div>
      <h2>Profil Pengguna</h2>
      {modeEdit ? (
        <div>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="number"
            value={usia}
            onChange={(e) => setUsia(Number(e.target.value))}
          />
          <button onClick={() => setModeEdit(false)}>Simpan</button>
        </div>
      ) : (
        <div>
          <p>Nama: {nama}</p>
          <p>Usia: {usia}</p>
          <button onClick={() => setModeEdit(true)}>Edit Profil</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;