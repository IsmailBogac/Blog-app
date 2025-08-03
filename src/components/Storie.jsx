import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";

export default function Storie({ blog }) {
  
  return (
    <>
      <div className="card mb-3 w-100 shadow bg-white/80">
        <div className="row g-0">
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.definition}</p>
            </div>
          </div>
          <div className="col-md-5">
            <Link to={`/storiedetails/${blog.id}`}>
              <img
                src={blog.img}
                className="img-fluid rounded-start"
                alt={blog.title}
                style={{ height: "210px", objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
