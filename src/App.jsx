import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();

  return (
    <>
          <div className="home-container p-0  ">
            <div className="top-80 end-50 translate-middle text-center px-3">
              <img src="./img/bgg.jpg" className="home-img" />
            </div>
            <div className="home-template">
              <h1 className="title fw-bold ">Blogun</h1>
              <h1 className=" fs-1 fw-bold">senin sanat galerindir.</h1>
              <p className="fw-light my-4 fs-5">
                Her yazı bir fırça darbesi, her kelime bir sanat eseri olsun.{" "}
                <br />
                Blogunu tasarlarken ilham almaktan korkma.
              </p>
              <Link onClick={() => navigate("/stories")}>
                <button className="btn btn-dark my-3 rounded-pill fs-5">
                  Start reading
                </button>
              </Link>
            </div>
          </div>
       
    </>
  );
}

export default App;
