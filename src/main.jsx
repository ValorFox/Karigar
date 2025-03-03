import "./index.css";
import App from "./App.jsx";
import store from "./Redux/Store.js";
import { Provider } from "react-redux";
import Home from "./pages/Homepage.jsx";
import About from "./pages/Aboutpage.jsx";
import Cartpage from "./pages/Cartpage.jsx";
import { createRoot } from "react-dom/client";
import Loginpage from "./pages/Loginpage.jsx";
import Explore from "./pages/Explorepage.jsx";
import Signuppage from "./pages/Signuppage.jsx";
import ContactUs from "./pages/ContactUspage.jsx";
import ArtistsPage from "./pages/Artistspage.jsx";
import ArtworkPage from "./pages/Artworkpage.jsx";
import Welcomepage from "./pages/Welcomepage.jsx";
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
      { path: "/cart", element: <Cartpage /> },
    ],
  },
  { path: "/login", element: <Loginpage /> },
  { path: "/signup", element: <Signuppage /> },
  { path: "/welcome-page", element: <Welcomepage /> },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
