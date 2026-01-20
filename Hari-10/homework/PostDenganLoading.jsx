// Nomor 3
import { useEffect, useState } from "react";

function PostDenganLoading() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!res.ok) throw new Error("Gagal fetch data");

        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (loading) return <p>Sedang Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDenganLoading;
