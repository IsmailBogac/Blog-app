import { useContext } from "react";
import { BlogContext } from "../Context/BlogContext";
export default function CategoryButtons() {
  const { categories, filterBlogs, selectedCategory } = useContext(BlogContext);
  return (
    <>
      <div className="container my-4 mx-2">
        {categories.map((category, index) => (
          <button
            className={`btn  ${
              selectedCategory === category
                ? "active btn-primary"
                : "btn-outline-primary"
            }`}
            key={index}
            onClick={() => filterBlogs(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}
