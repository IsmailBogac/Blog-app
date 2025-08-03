import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./index.css";
import App from "./App.jsx";
import OurStory from "./pages/OurStory.jsx";
import Write from "./pages/Write.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stories from "./pages/Stories.jsx";
import { BlogContextProvider } from "./Context/BlogContext.jsx";
import StorieDetails from "./pages/StorieDetails.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";
import PopUpProvider from "./Context/PopUpContext.jsx";
import SignUp from "./pages/SignUp.jsx";
import { LoggedContextProvider } from "./Context/LoggedContext.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "./pages/Profile.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { InputDataProvider } from "./Context/InputDataContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/ourstory", element: <OurStory /> },
      { path: "/stories", element: <Stories /> },
      { path: "/storiedetails/:id", element: <StorieDetails /> },
      { path: "/write", element: <Write /> },
      { path: "/preview", element: <PreviewPage /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="d-flex flex-column min-vh-100">
    <main className="pb-5">
              <InputDataProvider>
      <LoggedContextProvider>
        <AuthContextProvider>
          <BlogContextProvider>
            <PopUpProvider>
                <RouterProvider router={router} />
            </PopUpProvider>
          </BlogContextProvider>
        </AuthContextProvider>
      </LoggedContextProvider>
              </InputDataProvider>
      <Footer />
    </main>
  </div>
);
