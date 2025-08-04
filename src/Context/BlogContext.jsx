import { createContext, useEffect, useState } from "react";
import { defaultBlogs } from "../Data";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../Authentication/firebase";

export const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [blog, setBlog] = useState(defaultBlogs);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filtered, setFilteredBlog] = useState(defaultBlogs);

  const categories = ["All", ...new Set(blog.map((item) => item.category))];

  // filterBlogs fonksiyonunu dışarda tanımla
  function filterBlogs(clickedCategory) {
    setSelectedCategory(clickedCategory);
  }

  // firestore'dan kullanıcıların verilerini çek

  useEffect(() => {
    const q = query(collection(db, "posts"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlog(posts);
    });
    return () => unsubscribe();
  },[]);

  // selectedCategory değişince filtered blogları güncelle
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBlog(blog);
    } else {
      setFilteredBlog(
        blog.filter(
          (b) => b.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }
  }, [selectedCategory, blog]);

  return (
    <BlogContext.Provider
      value={{ blog, setBlog, categories, filterBlogs, filtered }}
    >
      {children}
    </BlogContext.Provider>
  );
}
