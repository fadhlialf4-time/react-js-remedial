// Nomor 4
import { useEffect, useState } from "react";

function AbortControll() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        const fetchPost = async () => {
            try {
                const res = await fetch( 
                    "https://jsonplaceholder.typicode.com/posts/1",
                { signal: controller.signal }
            )

            const data = await res.json()
                setPost(data)
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(err)
                }
            }
        }

        fetchPost()

        return () => {
            controller.abort()
        }
    }, [])

    if (!post) return <p>Sedang Loading.....</p>

    return <h3>{post.title}</h3>
}

export default AbortControll