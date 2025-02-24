import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Homepage.jsx";
import About from "./pages/Aboutpage.jsx";
import { createRoot } from "react-dom/client";
import Loginpage from "./pages/Loginpage.jsx";
import Explore from "./pages/Explorepage.jsx";
import Signuppage from "./pages/Signuppage.jsx";
import ContactUs from "./pages/ContactUspage.jsx";
import ArtistsPage from "./pages/Artistspage.jsx";
import ArtworkPage from "./pages/Artworkpage.jsx";
import ArtistProfileCreation from "./pages/ArtistProfileCreattion.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/explore", element: <Explore /> },
      { path: "/artists", element: <ArtistsPage /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/artist-signup", element: <ArtistProfileCreation /> },
      { path: "/artwork-purchase/:artid", element: <ArtworkPage /> },
    ],
  },
  { path: "/login", element: <Loginpage /> },
  { path: "/signup", element: <Signuppage /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
