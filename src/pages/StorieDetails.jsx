import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";

export default function StorieDetails() {
  const { id } = useParams();
  const { blog } = useContext(BlogContext);

  return (
    <>
      <div className="container">
        {blog
          .filter((b) => b.id === id)
          .map((b) => (
            <div
              key={b.id}
              className="row mt-5 mx-auto"
              style={{ maxWidth: "70%" }}
            >
              <h1 className="mb-5">{b.title}</h1>
              <div className="col-12 col-md-12">
                <img src={b.img} alt={b.title} className="card-img-bottom" />
              </div>
              <div className="col-12 col-md-0 mt-5">
                <p className="fs-5">{b.content}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
