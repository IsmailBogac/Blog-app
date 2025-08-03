import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useContext, useEffect, useState } from "react";
import { PopUpContext } from "../Context/PopUpContext";
import PopUp from "./PopUp";
import { LoggedContext } from "../Context/LoggedContext";

export default function Navbar() {
  const { isOpen, handleShowModal } = useContext(PopUpContext);
  const { isLogged, setIsLogged } = useContext(LoggedContext);
  const navigate = useNavigate();
  const [navIsOpen, navSetIsOpen] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLogged");
    if (isLoggedIn === "true") {
      setIsLogged(true);
    }
  }, []);
  function toggleNavbar() {
    navSetIsOpen(!navIsOpen);
  }
  return (
    <>
      <nav className="navbar   navbar-expand-lg  navbar-light shadow-md  shadow-sm border-bottom ">
        <div className="container d-flex justify-content-between  align-items-center ms-auto">
          <Link to={"/"}>
            <Logo />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${navIsOpen ? "show" : " "}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 d-flex gap-3 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to={"/ourstory"}>
                  Our Story
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to={"/stories"}>
                  Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to={"/write"}>
                  Write
                </NavLink>
              </li>
              {isLogged ? (
                <p className="pointer my-3 mx-4 fs-5">
                  <i
                    className="bi bi-person-circle pointer"
                    onClick={() => navigate("/profile")}
                  ></i>
                </p>
              ) : (
                <li className="nav-item">
                  <button
                    onClick={handleShowModal}
                    className="btn btn-dark rounded-pill"
                  >
                    Get started
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {isOpen ? <PopUp /> : ""}
    </>
  );
}
