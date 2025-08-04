import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Authentication/firebase";
import Storie from "../components/Storie";

export default function Profile() {
  const { handleLogout, user, userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "posts"), where("uid", "==", user.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPost(posts);
    });
    return () => unsubscribe();
  }, [user]);
  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Bu postu silmek istediğine emin misin?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "posts", id));
      console.log("silindi");
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  }

  return (
    <>
      <div className="container my-5">
        {user ? (
          <>
            <h4>
              Welcome to your profile ,{" "}
              <span className="text-primary">{userData?.name}</span>
            </h4>

            <button className="btn btn-danger logout"
              onClick={() => {
                handleLogout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <h4>Kullanıcı bulunamadı</h4>
        )}

        <div className="container w-75 dashboard my-5">
          {post && post.length > 0 ? (
            <>
              <h4>Your Storie's</h4>
              {post.map((p) => (
                <div
                  className="storie-container mx-1   p-3 my-3"
                  style={{ backgroundColor: "#f1f1f1" }}
                >
                  <Storie blog={p} />
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(p.id)}
                  >
                    delete
                  </button>
                </div>
              ))}
            </>
          ) : (
            <h5>Do you think <span className="text-primary pointer" onClick={() => navigate('/write')}>write</span> a storie</h5>
            
          )}
        </div>
      </div>
    </>
  );
}
