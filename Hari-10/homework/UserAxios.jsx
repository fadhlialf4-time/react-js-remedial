// Nomor 2
import axios from "axios"
import { useEffect, useState } from "react"

function UserAxios() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then(res => setUser(res.data))
    }, [])

    if (!user) return <p>Sedang Loading</p>

    return (
        <div>
            <h3>{user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Nomor Telepon : {user.phone}</p>
        </div>
    )
}

export default UserAxios