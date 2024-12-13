import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";
import { useEffect } from "react";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("name"));
  }, [searchParams]);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) return <p>Loading data .....</p>;
  if (error) return <p>Error .....</p>;

  const handleChange = (e) => {
    let filter = e.target.value;
    setSearchParams({ filter: filter });
  };

  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        name=""
        onChange={handleChange}
        className="form-control mb-2"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="list-group-item"
            >
              {item.id} - {item.title}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Blog;
