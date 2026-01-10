// Nomor 1
import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
        <p>Kamu menekan {count} kali</p>
        <button onClick={() => setCount(count + 1)}>
            Tambah (+1)
        </button>

        <button onClick={() => setCount(count - 1)}>
            Kurang (-1)
        </button>
        </div>
    )
}

export default Counter