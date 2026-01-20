// Nomor 2
import { useEffect, useState } from "react";

function DataPengguna() {
    const [konsumenId, setKonsumenId] = useState(1)
    const [pengguna, setPengguna] = useState(null)

    useEffect(() => {
        console.log("data Pengguna ID:", konsumenId)

        setPengguna({
            nama: `Pengguna ${konsumenId}`,
            email: `pengguna${konsumenId}@email.com`,
        })
    }, [konsumenId])

    return (
        <div>
            <h3>Data Pengguna</h3>
            {pengguna && (
                <>
                <p>Nama : {pengguna.nama}</p>
                <p>Email : {pengguna.email}</p>
                </>
            )}
            <button onClick={() => setKonsumenId(konsumenId + 1)}>
                Ganti Pengguna
            </button>
        </div>
    )
}

export default DataPengguna