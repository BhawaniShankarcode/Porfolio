import Home from '../Component/Home'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from '../Component/Navbar'
import About from '../Component/About'
import Project from '../Component/Project'
import Contact from '../Component/Contact'

function App() {
  const router = createBrowserRouter([{
    path : '/',
    element : <><Navbar/> <Home/><About/><Project/><Contact/></>
  },
  {
    path : '/about',
    element : <><Navbar/> <About/></>
  },
  {
    path : '/project',
    element : <><Navbar/> <Project/></>
  },
  {
    path : '/contact',
    element : <><Navbar/> <Contact/></>
  }
])
  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
