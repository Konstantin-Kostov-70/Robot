import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/faq',
    element: <Faq />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
     path: '/login',
     element: <Login />
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
