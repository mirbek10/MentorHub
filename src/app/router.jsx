import { createBrowserRouter } from "react-router-dom";
import Layout from "../widgets/Layout/Layout";
import Home from "../pages/landing/Home/Home.jsx";
import Login from "../pages/Auth/Login/Login.jsx";
import Register from "../pages/Auth/Register/Register.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Mentor from "../pages/Mentor/Mentor.jsx";
import MentorPage from "../pages/landing/mentorPage/MentorPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {path:"/mentorpage", element: <MentorPage/>}
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/mentor",
    element:<Mentor/>
  }
]);