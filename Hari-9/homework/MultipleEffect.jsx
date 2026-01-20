import { useEffect, useState } from "react";

function MultipleEffect() {
    const [hitung, setHitung] = useState(0)
    const [nama, setNama] = useState("")

    useEffect(() => {
        document.title = `Hitung : ${hitung}`
    }, [hitung])

    useEffect(() => {
        console.log("Nama berubah :", nama);
    }, [nama])

    return (
        <div>
            <h3>Hitung : {hitung}</h3>
            <button onClick={() => setHitung(hitung + 1)}>+</button>

            <br /><br />

            <input 
            type="text"
            placeholder="Masukkan nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            />
        </div>
    )
}

export default MultipleEffect