import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Authentication/firebase";

export default function Storie({ blog }) {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchAuthor = async () => {
      if (!blog.uid) return;

      const userRef = doc(db, "users", blog.uid); // 🔹 UID ile tek kullanıcı çek
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        setUserName(`${userData.name} `+`${userData.surname}`);
      }
    };

    fetchAuthor();
  }, [blog.uid]);
  return (
    <>
      <div className="card mb-3 w-100 shadow bg-white/80">
        <div className="row g-0">
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title">{blog.title}</h3>
              <h5 className="card-text  text-secondary my-4">{blog.summary}</h5>
              <p className="userName">
                Writed by <span className="text-primary"> {userName}</span>
              </p>
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
