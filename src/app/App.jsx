import './Style/App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


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
