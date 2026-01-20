// Nomor 3
import { useEffect, useState } from "react"

function UkuranJendela() {
    const [ukuran, setUkuran] = useState({
        lebar: window.innerWidth,
        tinggi: window.innerHeight,
    })

    useEffect(() => {
        function handleResize() {
            setUkuran({
                lebar: window.innerWidth,
                tinggi: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize)
        
        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event listener dibersihkan");
        }
    }, [])

    return (
        <p>
            Lebar: {ukuran.lebar}px | Tinggi: {ukuran.tinggi}px
        </p>
    )
}

export default UkuranJendela