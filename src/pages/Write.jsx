import { useContext } from "react";
import NewBlog from "../components/NewBlog";
import { LoggedContext } from "../Context/LoggedContext";

export default function Write() {
  const { isLogged } = useContext(LoggedContext);
  return (
    <>
      <div className="container my-5">
        {isLogged ? <NewBlog /> : <h3>Please Login or SignUp </h3>}
      </div>
    </>
  );
}
