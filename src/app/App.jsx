import './Style/App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import "./style/App.css"; 
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './store/store';

function App() {

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App