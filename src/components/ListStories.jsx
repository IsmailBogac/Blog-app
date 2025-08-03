import { useContext } from "react";
import { BlogContext } from "../Context/BlogContext";
import Storie from "./Storie";
import CategoryButtons from "./CategoryButtons";

export default function ListStories() {
  const { filtered } = useContext(BlogContext);

  return (
    <>
      <div className="container">
        <CategoryButtons />
      </div>
      <div className="container">
        <div className="row">
          {filtered.map((b) => (
            <div key={b.id} 
              className="col-15 col-md-6 col-lg-5 mt-3  d-flex justify-content-center "
            >
              <Storie blog={b} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
