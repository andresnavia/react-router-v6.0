import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";

const BlogDetails = () => {
  const param = useParams();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + param.id
  );

  if (loading) return <p>Loading data .....</p>;
  if (error) return <p>Error .....</p>;
  return (
    <>
      <h1>{data.title}</h1>
      <b></b>
      <p>{data.body}</p>

      <Link to="/blog">Volver</Link>
    </>
  );
};

export default BlogDetails;
