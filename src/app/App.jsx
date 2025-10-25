import './Style/App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import "./style/App.css"; 

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        style={{ zIndex: 999999, position: "fixed" }}
      />
    </>
  )
}

export default App
