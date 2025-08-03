import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import { AuthContext } from "../Context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Authentication/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Authentication/firebase";
import { InputDataContext } from "../Context/InputDataContext";

export default function PreviewPage() {
  const [category, setCategory] = useState("");
  const { inputData, setInputData } = useContext(InputDataContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSave = async () => {
    if (category.trim().length < 2) {
      alert("Lütfen geçerli bir kategori giriniz...");
      return;
    }
    if (inputData.img instanceof File) {
      const imageRef = ref(storage, `images/${inputData.img.name}`);
      await uploadBytes(imageRef, inputData.img);
      const imgURL = await getDownloadURL(imageRef);

      await addDoc(collection(db, "posts"), {
        title: inputData.title,
        content: inputData.content,
        category: category,
        img: imgURL,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });
      console.log("Yüklenen URL:", imgURL);
    } else {
      console.warn("Dosya File nesnesi değil!", inputData.img);
    }

    navigate("/write");
  };
  function handleCancel() {
    navigate("/write");
  }

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4">Ön İzleme</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="details">
              <img
                src={inputData.img && URL.createObjectURL(inputData.img)}
                alt=""
                style={{ width: "50%" }}
              />
              <h3>{inputData.title}</h3>
              <p>{inputData.content}</p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-space-between">
            <div className="handle-changes ">
              <label>
                <h5>Get Category :</h5>
              </label>
              <br />
              <input
                type="text"
                className="form-input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <br />

              <div className="buttons my-5 ">
                <button onClick={handleSave} className="btn btn-success ">
                  Save
                </button>
                <button onClick={handleCancel} className="btn btn-danger mx-3">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
