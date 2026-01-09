// import Button from './components/Button'
// import { useState } from 'react'
import UserProfile from './components/UserProfile';
import { useState } from "react";

function App() {
  const [name, setName] = useState('Fadhli')
  const [age, setAge] = useState(19)
  const [isEditing, setIsEditing] = useState(false)
  return (
    <>
      <h2>Profile User :</h2>
      {isEditing ? (
        <div>
          <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 m-2 p-2'
          />

          <input 
          type='number'
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className='border-2 m-2 p-2'
          />
          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </div>
      ) : (
        <div>
          <p>Nama : {name}</p>
          <p>Usia : {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profil</button>
        </div>
      )}
    </>
  )
}

//                     <button onClick={() => setIsEditing(false)}>Simpan</button>
//                 </div>
//             ) : (
//             <div>
//                 <p>Nama: {name}</p>
//                 <p>Usia: {age}</p>
//                 <button onClick={() => setIsEditing(true)}>Edit Profil</button>
//             </div>
//             )}
//         </>
//     )
// }
export default App