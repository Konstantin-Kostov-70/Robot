import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

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
  }
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
