// Nomor 1
import { useEffect, useState } from "react"

function PostFetch() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    if (!post) return <p>Sedang Loading.....</p>

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostFetch