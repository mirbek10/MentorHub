import { createBrowserRouter } from "react-router-dom";
import Layout from "../widgets/Layout/Layout";
import Home from "../pages/landing/Home/Home.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Mentor from "../pages/Mentor/Mentor.jsx";
import MentorPage from "../pages/landing/mentorPage/MentorPage.jsx";
import Project from "../pages/landing/project/Project.jsx";
import Register from "../pages/Auth/Register.jsx";
import SigneIn from "../pages/Auth/SigneIn.jsx";
import CoursesPage from "../pages/landing/kourses/Kourses.jsx";
import CourseDetail from "../pages/landing/kourses/detail/DetailCurse.jsx";
import MentorProfile from "../widgets/Layout/MentorLayout.jsx";
import ProfileMentor from "../pages/mentor/mentorProfileComponents/ProfileMentor.jsx";
import ChangeMentorInfo from "../pages/mentor/ChangeMentorInfo/ChangeMentorinfo.jsx";
import HistoryPage from "../pages/landing/history/HistoryPage.jsx";
import Course from "../pages/mentor/myCourse/Course.jsx";
import NewCourse from "../pages/mentor/newcourse/NewCourse.jsx";
import DataCourse from "../pages/mentor/dataCourse/DataCourse.jsx";
import VideoLesson from "../pages/mentor/VideoLesson/VidioLesson.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {path:"/mentorpage", element: <MentorPage/>},
      { path: "/project", element: <Project /> },
      { path: "/kours", element: <CoursesPage /> },
      {path: "/koursdetail/:id", element: <CourseDetail />},
      {path:"/history",element:<HistoryPage/>}
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
   {
        path: '/mentorProfile',
        element: <MentorProfile />,
        children: [
            // { index: true, element: <Navigate to="profile" replace /> },
            { path: 'profile', element: <ProfileMentor /> },
            { path: 'course', element: <Course /> },
            // { path: "technology", element: <Technology /> },
            
          ]
        },
        {path:'/ChangeInfoMentor',element:<ChangeMentorInfo/>},
        {path:'/newcourse', element: <NewCourse /> },
           { path: '/datacourse', element: <DataCourse /> },
               { path: '/videolesson', element: <VideoLesson /> },



]);
