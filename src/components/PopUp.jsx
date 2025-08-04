import { useContext, useEffect, useRef } from "react";
import { PopUpContext } from "../Context/PopUpContext";
import { useNavigate } from "react-router-dom";
import { LoggedContext } from "../Context/LoggedContext";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth } from "../Authentication/firebase";

export default function PopUp() {
  const { setIsOpen } = useContext(PopUpContext);
  const {  setIsLogged } = useContext(LoggedContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      localStorage.setItem("isLogged", "true");
      setIsLogged(true);
      
      useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLogged");
        if(isLoggedIn === "true"){
          setIsLogged(true)
        }
      },[])



      setIsOpen(false);
      navigate("/profile");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <div className="overlay" onClick={() => setIsOpen(false)}></div>
      <div className="popup" role="dialog">
        <span className="fs-4 pointer close" onClick={() => setIsOpen(false)}>
          X
        </span>
        <div className="popup-row">
          <div className="col-md-6 login">
            <h3>Login</h3>
            <form className="from-group" onSubmit={handleLogin}>
              <label htmlFor="email">E-mail</label>
              <input
                ref={emailRef}
                type="text"
                name="email"
                className="form-control my-3"
              />
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                className="form-control my-3"
              />
              <button className="btn btn-outline-dark my-3">Login</button>
              <button
                className="btn btn-outline-dark mx-2"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
