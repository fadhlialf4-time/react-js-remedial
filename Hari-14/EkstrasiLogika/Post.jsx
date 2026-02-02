// Nomor 2
import useFetch from "./useFetch";

function Post() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}

export default Post;
