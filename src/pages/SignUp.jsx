import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRef } from "react";
import { auth, db } from "../Authentication/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function SignUp() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSaveUser(e) {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      const user = userCredential.user;
      await updateProfile(user, {
        name: user.displayName,
      });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        email: emailRef.current.value,
        creadetAt: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }

    (nameRef.current.value = ""),
      (surnameRef.current.value = ""),
      (emailRef.current.value = ""),
      (passwordRef.current.value = "");
  }
  return (
    <>
      <div className="container my-5">
        <div className="row mx-5">
          <div className="col-md-6">
            <img className="register-img" src="./img/signup.jpg" alt="" />
          </div>
          <div className="col-md-6 my-5">
            <form className="form-group me-5" onSubmit={handleSaveUser}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                ref={nameRef}
                className="form-control "
                placeholder="Name"
              />
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                ref={surnameRef}
                className="form-control "
                placeholder="Surname"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="form-control "
                placeholder="Email"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                ref={passwordRef}
                className="form-control "
                placeholder="Password"
              />

              <button type="submit" className="btn btn-outline-dark my-5">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
