import { createBrowserRouter } from "react-router-dom";
import Layout from "../widgets/Layout/Layout";
import Home from "../pages/landing/Home/Home.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Mentor from "../pages/Mentor/Mentor.jsx";
import Project from "../pages/landing/project/Project.jsx";
import Register from "../pages/Auth/Register.jsx";
import SigneIn from "../pages/Auth/SigneIn.jsx";
import CoursesPage from "../pages/landing/kourses/Kourses.jsx";
import CourseDetail from "../pages/landing/kourses/detail/DetailCurse.jsx";
import MentorPage from "../pages/landing/mentorDetail/MentorPage.jsx";
import MentorList from "../pages/landing/mentor/MentorList.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/project", element: <Project /> },
      { path: "/kours", element: <CoursesPage /> },
      {path: "/koursdetail/:id", element: <CourseDetail />},
      {path: "/mentor-list", element: <MentorList />},
      {path:"/mentor-detail/:id", element: <MentorPage/>}
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
    element: <SigneIn />,
  },
  {
    path: "/mentor",
    element: <Mentor />,
  },
]);
