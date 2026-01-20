// Nomor 1
import { useEffect } from "react";

function EffectSederhana() {
    useEffect(() => {
    console.log("Komponen di update")       
    })

    return <h2>Cek console di bawah ini</h2>
}

export default EffectSederhana