import { useContext, useRef, useState } from "react";
import { BlogContext } from "../Context/BlogContext";
import PreviewPage from "../pages/PreviewPage";
import { useNavigate } from "react-router-dom";
import { InputDataContext } from "../Context/InputDataContext";

export default function NewBlog() {
  const { inputData, setInputData } = useContext(InputDataContext);

  const navigate = useNavigate();

  function handlePreview() {
    navigate("/preview");
  }

  return (
    <>
      <h1>Add new blog</h1>
      <div className="col">
        <div className="mb-3 row-md-12">
          <input
            value={inputData.title}
            onChange={(e) =>
              setInputData({ ...inputData, title: e.target.value })
            }
            type="text"
            placeholder="Title"
            className="title-input"
            style={{ width: "100%", height: "10vh" }}
          />
        </div>
        <div className="mb-3 row-md-12">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              console.log("Seçilen dosya:", file);
              setInputData({ ...inputData, img: file });
            }}
          />
        </div>
        <div className="mb-3 row-md-12">
          <textarea
            value={inputData.content}
            onChange={(e) =>
              setInputData({ ...inputData, content: e.target.value })
            }
            style={{ width: "100%", height: "100vh" }}
            className="content-textarea"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success mx-auto"
          onClick={handlePreview}
        >
          Publish
        </button>
      </div>
    </>
  );
}
